/*
 * @Description: 标签面版管理
 * @Date: 2023-01-30 18:06:23
 * @LastEditors: 无言的对话
 * @LastEditTime: 2023-04-21 14:04:57
 * @FilePath: \vue2\src\store\modules\tags.js
 */
import { setStore, getStore } from '@/utils/store'
import { diff } from '@/utils/util'
import website from '@/config/website'
const isFirstPage = website.isFirstPage;
const tagWel = website.fistPage;
const tagObj = {
    label: '', //标题名称
    value: '', //标题的路径
    params: '', //标题的路径参数
    query: '', //标题的参数
    meta: {},//额外参数
    group: [], //分组
}
//处理首个标签
function setFistTag(list) {
    console.log('list', list)
    if (list.length == 1) {
        list[0].close = false;
    } else {
        list.forEach(ele => {
            if (ele.value === tagWel.value && isFirstPage === false) {
                ele.close = false
            } else {
                ele.close = true
            }
        })
    }
}


const navs = {
    state: {
        tagList: getStore({ name: 'tagList' }) || [],
        tag: getStore({ name: 'tag' }) || tagObj,
        tagWel: tagWel
    },
    actions: {

    },
    mutations: {
        ADD_TAG: (state, action) => {
            state.tag = action;
            setStore({ name: 'tag', content: state.tag, type: 'session' })
            for (let index = 0; index < state.tagList.length; index++) {
                const element = state.tagList[index];
                if (element.value == action.value) {
                    return
                }
            }
            if (state.tagList.some(ele => diff(ele, action))) return
            state.tagList.push(action)
            setFistTag(state.tagList);
            setStore({ name: 'tagList', content: state.tagList, type: 'session' })
        },
        UPDATA_TAG: (state, action) => {
            const newTagList = []
            state.tagList.forEach((item) => {
                if (item.value == action.value) {
                    newTagList.push({
                        ...item,
                        label: action.label
                    })
                } else {
                    newTagList.push({ ...item })
                }
            })
            state.tagList = [...newTagList]
            setFistTag(state.tagList);
            setStore({ name: 'tagList', content: newTagList, type: 'session' })
        },
        DEL_TAG: (state, action) => {
            state.tagList = state.tagList.filter(item => {
                return !diff(item, action);
            })
            setFistTag(state.tagList);
            setStore({ name: 'tagList', content: state.tagList, type: 'session' })
        },
        DEL_ALL_TAG: (state) => {
            state.tagList = [state.tagWel];
            setStore({ name: 'tagList', content: state.tagList, type: 'session' })
        },
        DEL_TAG_OTHER: (state) => {
            state.tagList = state.tagList.filter(item => {
                if (item.value === state.tag.value) {
                    return true;
                } else if (!website.isFirstPage && item.value === website.fistPage.value) {
                    return true;
                }
            })
            setFistTag(state.tagList);
            setStore({ name: 'tagList', content: state.tagList, type: 'session' })
        },
    }
}
export default navs