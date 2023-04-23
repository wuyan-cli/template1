<template>
  <div class="avue-contail" :class="{ 'avue--collapse': isCollapse }">
    <div class="avue-header">
      <!-- 顶部导航栏 -->
      <top />
    </div>

    <div class="avue-layout">
      <div class="avue-left">
        <!-- 左侧导航栏 -->
        <sidebar />
      </div>
      <div class="avue-main">
        <!-- 顶部标签卡 -->
        <tags />
        <!-- 主体视图层 -->
        <el-scrollbar style="height:100%">
          <keep-alive>
            <router-view class="avue-view" v-if="$route.meta.keepAlive" :key="key" />
          </keep-alive>
          <router-view class="avue-view" v-if="!$route.meta.keepAlive" :key="key" />
        </el-scrollbar>

      </div>
    </div>
    <!-- <el-footer class="avue-footer">
      <img src="/svg/logo.svg"
           alt=""
           class="logo">
      <p class="copyright">© 2018 Avue designed by wuhebiao</p>
    </el-footer> -->
    <div class="avue-shade" @click="showCollapse"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import tags from './tags'
import top from './top/'
import sidebar from './sidebar/'
import { getScreen } from '@/utils/util'

export default {
  components: {
    top,
    tags,
    sidebar,
  },
  name: 'layout',
  data() {
    return {
      //刷新token锁
      refreshLock: false,
      //刷新token的时间
      refreshTime: '',
    }
  },
  created() {
    //实时检测刷新token
  },
  mounted() {
    this.init()
  },
  computed: {
    ...mapGetters(['isLock', 'isCollapse', 'website']),
    key() {
      return this.$route.path + Math.random()
    },
  },
  props: [],
  methods: {
    showCollapse() {
      this.$store.commit('SET_COLLAPSE')
    },
    // 屏幕检测
    init() {
      this.$store.commit('SET_SCREEN', getScreen())
      window.onresize = () => {
        setTimeout(() => {
          this.$store.commit('SET_SCREEN', getScreen())
        }, 0)
      }
    },
  },
}
</script>
