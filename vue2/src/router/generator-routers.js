/*
 * @Description: 动态路由
 * @Date: 2023-04-20 14:20:38
 * @LastEditors: 无言的对话
 * @LastEditTime: 2023-04-21 14:03:09
 * @FilePath: \vue2\src\router\generator-routers.js
 */
import router from "@/router";
/**
 * 生成路由
 * @param {Array} routerlist 格式化路由
 * @returns
 */

export function addRouter(routerlist) {
    const menu = []
    try {
        routerlist.forEach(e => {
            let item = {
                path: e.path,
                name: e.name,
                icon: e.source,
                id: e.id,
                parentId: e.parentId,
                component: () => {
                    if (e.children && e.children.length > 0) {//一级目录
                        return import('@/layout/index.vue')
                    } else {
                        return import(`@/views${e.path}.vue`)
                    }
                }
            }
            if (e.parentId == 0 && !e.children) { //一级菜单且没有子菜单
                item = {
                    path: '/',
                    redirect: e.path,
                    component: () => import('@/layout/index.vue'),
                    id: e.id,
                    icon: e.source,
                    parentId: e.parentId,
                    name: e.name,
                    children: [
                        {
                            path: e.path,
                            name: e.name,
                            parentId: e.id,
                            component: () => import(`@/views${e.path}.vue`),
                        }
                    ]
                }
                router.addRoute(item)
            }
            if (e.children && e.children.length > 0) {
                const children = addRouter(e.children)
                // 保存权限
                item = { ...item, children: children }
                router.addRoute(item)
            }
            menu.push(item)
        })
    } catch (error) {
        console.error(error)
        return []
    }
    return menu
}

export const generateTitle = (title, key) => {
    if (!key) return title;
    // const hasKey = this.$vue.$te("route." + key);
    // if (hasKey) {
    //     // $t :this method from vue-i18n, inject in @/lang/index.js
    //     const translatedTitle = this.$vue.$t("route." + key);
    //     return translatedTitle;
    // }
    return title;
}
//设置路由值
export const getValue = (route) => {
    let value = "";
    if (route.query.src) {
        value = route.query.src;
    } else {
        if (route.path.includes("/onlineForm")) {
            value = route.fullPath;
        } else {
            value = route.path;
        }
    }
    return value;
}
//处理路由
export const getPath = (params) => {
    let { src } = params;
    let result = src || "/";
    // if (src.includes("http") || src.includes("https")) {
    //     if (src.includes("xxl-job")) {
    //         result = "/wel";
    //         window.open(src);
    //     } else {
    //         result = `/myiframe/urlPath?${objToform(params)}`;
    //     }
    // }
    return result;
}

