<template>
  <div class="home">
    <div id="nav">
      <el-row>
        <el-col :span="4">
          <h5>自定义颜色</h5>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <template v-for="item in antRouter">
              <router-link
                :to="item.path"
                :key="item.name"
              >
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">{{item.meta.title}}</span>
                </el-menu-item>
              </router-link>
            </template>
          </el-menu>
        </el-col>
        <el-col :span="20">
          <router-view />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState} from "vuex"
export default {
  name: "home",
  computed: {
    ...mapState(['antRouter'])
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
