<template>
  <div class="avue-top">
    <div class="top-bar__left">
      <div class="avue-breadcrumb" :class="[{ 'avue-breadcrumb--active': isCollapse }]" v-if="showCollapse">
        <i class="icon-navicon" @click="setCollapse"></i>
      </div>
    </div>
    <div class="top-bar__title">
      <div class="top-bar__item top-bar__item--show" v-if="showMenu">
        <top-menu></top-menu>
      </div>
      <!-- <span class="top-bar__item" v-if="showSearch">
        <top-search></top-search>
      </span> -->
    </div>
    <div class="top-bar__right">
      <el-tooltip v-if="showColor" v-show="false" effect="dark" :content="$t('navbar.color')" placement="bottom">
        <div class="top-bar__item">
          <top-color></top-color>
        </div>
      </el-tooltip>
      <el-tooltip v-if="showFullScren" effect="dark"
        :content="isFullScren ? $t('navbar.screenfullF') : $t('navbar.screenfull')" placement="bottom">
        <div class="top-bar__item">
          <i :class="isFullScren ? 'icon-tuichuquanping' : 'icon-quanping'" @click="handleScreen"></i>
        </div>
      </el-tooltip>
      <el-dropdown>
        <span class="el-dropdown-link data-dropdown-link">
          {{ userInfo.userName }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <router-link to="/">{{ $t('navbar.dashboard') }}</router-link>
          </el-dropdown-item>
          <el-dropdown-item>
            <router-link to="/info/index">{{ $t('navbar.userinfo') }}</router-link>
          </el-dropdown-item>
          <el-dropdown-item @click.native="logout" divided>{{ $t('navbar.logOut') }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
import { fullscreenToggel, listenfullscreen } from '@/utils/util'
import topLock from './top-lock'
import topMenu from './top-menu'
import topSearch from './top-search'
// import topTheme from "./top-theme";
// import topLogs from "./top-logs";
import topColor from './top-color'
// import topLang from "./top-lang";
// import WindowModal from '@/components/WindowModal/WindowModal.vue'
export default {
  components: {
    topLock,
    topMenu,
    topSearch,
    // topTheme,
    // topLogs,
    topColor,
    // topLang,
    // WindowModal
  },
  name: 'top',
  data() {
    return {
      noteData: [],
    }
  },
  filters: {},
  created() { },
  mounted() {
    listenfullscreen(this.setScreen)
  },
  computed: {
    ...mapState({
      showDebug: (state) => state.common.showDebug,
      showTheme: (state) => state.common.showTheme,
      showLock: (state) => state.common.showLock,
      showFullScren: (state) => state.common.showFullScren,
      showCollapse: (state) => state.common.showCollapse,
      showSearch: (state) => state.common.showSearch,
      showMenu: (state) => state.common.showMenu,
      showColor: (state) => state.common.showColor || true,
    }),
    ...mapGetters([
      'userInfo',
      'isFullScren',
      'tagWel',
      'tagList',
      'isCollapse',
      'tag',
      'logsLen',
      'logsFlag',
    ]),
  },
  methods: {
    handleScreen() {
      fullscreenToggel()
    },
    setCollapse() {
      this.$store.commit('SET_COLLAPSE')
    },
    setScreen() {
      this.$store.commit('SET_FULLSCREN')
    },
    logout() {
      this.$confirm(this.$t('logoutTip'), this.$t('tip'), {
        confirmButtonText: this.$t('submitText'),
        cancelButtonText: this.$t('cancelText'),
        type: 'warning',
      }).then(() => {
        this.$store.dispatch('LogOut').then(() => {
          this.$router.push({ path: '/login' })
          this.$router.$avueRouter.routerList = []
        })
      })
    },
  },
}
</script>

<style lang="less" scoped></style>
