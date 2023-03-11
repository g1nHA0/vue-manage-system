<template>
  <div>
    <div class="container">
      <div class="handle-box">
        <el-button type="primary" :icon="Loading" @click="handleSearch"
        >刷新
        </el-button>
        <el-button type="primary" :icon="Plus"
                   @click="handleEdit(0,0, 0)">新增
        </el-button>
      </div>
      <el-table
          :data="tableData"
          border
          class="table"
          ref="multipleTable"
          header-cell-class-name="table-header"
      >
        <el-table-column type="index" label="序号" width="80"></el-table-column>
        <el-table-column prop="content" label="公告详情"></el-table-column>
        <el-table-column prop="addtime" label="添加时间"></el-table-column>
        <el-table-column prop="updtime" label="修改时间"></el-table-column>
        <el-table-column label="操作" width="220" align="center">
          <template #default="scope">
            <el-button
                text
                :icon="Edit"
                @click="handleEdit(1,scope.$index, scope.row)"
                v-permiss="15"
            >
              编辑
            </el-button>
            <el-button
                text
                :icon="Delete"
                class="red"
                v-permiss="16"
                @click="handleDelete(scope.$index)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
            background
            layout="total, prev, pager, next"
            :current-page="query.pageIndex"
            :page-size="query.pageSize"
            :total="pageTotal"
            @current-change="handlePageChange"
        ></el-pagination>
      </div>
    </div>

    <!-- 编辑弹出框 -->
    <el-dialog title="编辑" v-model="editVisible" width="30%">
      <el-form label-width="70px">
        <el-form-item label="公告详情">
          <el-input v-model="form.content"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="editVisible = false">取 消</el-button>
          <el-button type="primary" @click="saveEdit">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts" name="basetable">
import {Delete, Edit, Loading, Plus} from "@element-plus/icons-vue";
import {ElMessage, ElMessageBox} from "element-plus";
import {reactive, ref} from "vue";
import {deleteAnnouncements, getAnnouncements, saveOrUpdateAnnouncements} from "@/api";

interface TableItem {
  id: string;
  content: string;
  addtime: string;
  updtime: string;
}

const query = reactive({
  address: "",
  name: "",
  pageIndex: 1,
  pageSize: 10,
  eventType: "0",
});
const tableData = ref<TableItem[]>([]);
const pageTotal = ref(0);
// 获取表格数据
const getData = () => {
  getAnnouncements().then((res) => {
    tableData.value = res.data.data.list;
    pageTotal.value = res.data.data.total || 0;
  });
};
getData();

// 查询操作
const handleSearch = () => {
  query.pageIndex = 1;
  getData();
};
// 分页导航
const handlePageChange = (val: number) => {
  query.pageIndex = val;
  getData();
};

// 删除操作
const handleDelete = (index: number) => {
  // 二次确认删除
  ElMessageBox.confirm("确定要删除吗？", "提示", {
    type: "warning",
  })
  .then(() => {
    deleteAnnouncements(tableData.value[index].id).then((res) => {
      ElMessage.success("删除成功");
    }).catch((err) => {
      ElMessage.error("删除成功");
    });
  })
  .catch(() => {
  });
  setTimeout(() => {
    getData();
  }, 1000);
};

// 表格编辑时弹窗和保存
const editVisible = ref(false);
let form = reactive({
  content: "",
  id: "",
});
let idx: number = -1;
let saveType: number = 0;
const handleEdit = (buttonSaveType: number, index: number, row: any) => {
  idx = index;
  saveType = buttonSaveType;
  if (saveType == 1) {
    form.content = row.content;
    form.id = row.id;
  } else {
    form.content = "";
    form.id = "";
  }
  editVisible.value = true;
};
const saveEdit = () => {
  editVisible.value = false;
  saveOrUpdateAnnouncements(saveType, form).then((res) => {
    if (saveType == 0) {
      ElMessage.success("添加成功")
    } else {
      ElMessage.success("修改成功")
    }
  }).catch((err) => {
    if (saveType == 0) {
      ElMessage.error("添加失败")
    } else {
      ElMessage.error("修改失败")
    }
  });
  setTimeout(() => {
    getData();
  }, 1000);
};
</script>

<style scoped>
.handle-box {
  margin-bottom: 20px;
}

.handle-select {
  width: 120px;
}

.handle-input {
  width: 100px;
}

.table {
  width: 100%;
  font-size: 14px;
}

.red {
  color: #f56c6c;
}

.mr10 {
  margin-right: 10px;
}

.table-td-thumb {
  float: left;
  flex-wrap: wrap;
  display: block;
  margin: 1px;
  width: 40px;
  height: 40px;
}
</style>
