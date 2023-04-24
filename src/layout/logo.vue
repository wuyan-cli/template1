<!--
 * @Description: 文件内容描述
 * @Date: 2022-09-15 21:02:46
 * @LastEditors: 无言的对话
 * @LastEditTime: 2023-01-19 18:00:08
 * @FilePath: \demo\src\layout\logo.vue
-->
<template>
  <div class="avue-logo">
    <transition name="fade">
      <span v-if="keyCollapse" class="avue-logo_subtitle" key="0">
        <img src="@/assets/img/logo.png" width="30" />
    </span>
  </transition>
    <transition-group name="fade">
      <template v-if="!keyCollapse">
        <span class="avue-logo_title" key="1">
          <div class="index-logo">
            <!-- <img src="img/bg/img-logo.png"
                   width="30"
                   alt=""> -->
            <!-- {{website.indexTitle}} -->
            工单管理平台
            <!-- <img src="../../assets/img/index-logo.png"  alt=""> -->
          </div>
        </span>
      </template>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'logo',
  data() {
    return {}
  },
  created() { },
  computed: {
    ...mapGetters(['website', 'keyCollapse']),
  },
  methods: {},
}
</script>

<style lang="less" scoped>
.index-logo {
  width: 150px;
  height: 65px;
}

.index-logo img {
  width: 150px;
  height: 65px;
}

.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-active {
  transition: opacity 2.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.avue-logo {
  position: fixed;
  top: 0;
  left: 0;
  width: 240px;
  height: 64px;
  line-height: 64px;
  background-color: #20222a;
  font-size: 20px;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  color: rgba(255, 255, 255, 0.8);
  z-index: 1024;

  &_title {
    display: block;
    text-align: center;
    font-weight: 300;
    font-size: 16px;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;

      img {
        margin-right: 5px;
      }
    }
  }

  &_subtitle {
    padding-top: 10px;
    display: block;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
  }
}

.avue--collapse .avue-left,
.avue--collapse .avue-logo {
  width: 60px;
}</style>
