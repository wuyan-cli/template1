/*
 * @Description: 路由整体拦截器
 * @Date: 2022-09-15 21:02:46
 * @LastEditors: 无言的对话
 * @LastEditTime: 2023-04-21 14:11:14
 * @FilePath: \vue2\src\permission.js
 */
/**
 * 拦截器
 *
 */
import router from "@/router";
import store from "@/store";
import { getStore } from '@/utils/store'
import { validatenull } from "@/utils/validate";
import { generateTitle } from '@/router/generator-routers'

router.beforeEach((to, from, next) => {
  const WhiteList = ['/login'] //免登录白名单
  const token = getStore({ name: 'token' })
  if (token) {
    if (to.path === "/login") {
      //如果登录成功访问登录页跳转到主页
      next({ path: "/" });
    } else {
      //如果用户信息为空则获取用户信息，获取用户信息失败，跳转到登录页
      if (store.getters.userInfo.accessToken?.length === 0) {
        store.dispatch("FedLogOut").then(() => {
          next({ path: "/login" });
        });
      } else {
        const menuList = store.getters.menu;
        // 如果后台获取的菜单不存在则重新获取菜单
        if (menuList.length == 0) {
          store
            .dispatch("GetMenu")
            .then((data) => {
              if (data.length === 0) {
                next({ path: "/login" });
              } else {
                next({
                  ...to,
                  replace: true
                })
              }
            })
            .catch(() => {
              next({ path: "/login" });
            });
        } else {
          const value = to.query.src || to.fullPath;
          let label = to.query.name || to.name;
          const meta = to.meta || router.$avueRouter.meta || {};
          const i18n = to.query.i18n;
          if (
            meta.isTab !== false &&
            !validatenull(value) &&
            !validatenull(label)
          ) {
            store.commit("ADD_TAG", {
              label: label,
              value: value,
              params: to.params,
              query: to.query,
              meta: (() => {
                if (!i18n) {
                  return meta;
                }
                return {
                  i18n: i18n,
                };
              })(),
              group: [],
            });
          }
          next();
        }
      }
    }
  } else {
    if (WhiteList.includes(to.path)) {
      next();
    } else {
      next({ path: "/login" });
    }

    // router.replace('/login');
  }
});

router.afterEach(() => {
  let title = store.getters.tag.label;
  let i18n = store.getters.tag.meta.i18n;
  title = generateTitle(title, i18n);
  //根据当前的标签也获取label的值动态设置浏览器标题
  document.title = title;
});
