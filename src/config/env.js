// 配置编译环境和线上环境之间的切换

let baseUrl = '';
let appMode = ''
let iconfontVersion = ['567566_pwc3oottzol', '1066523_6bvkeuqao36'];
let iconfontUrl = `//at.alicdn.com/t/font_$key.css`;
let codeUrl = `${baseUrl}/code`
const env = process.env
if (env.NODE_ENV == 'development') {
    appMode = 'web'
    baseUrl = ``; // 开发环境地址
} else if (env.NODE_ENV == 'production') {
    appMode = 'web'
    baseUrl = ``; //生产环境地址
} else if (env.NODE_ENV == 'test') {
    appMode = 'web'
    baseUrl = ``; //测试环境地址
}
export {
    baseUrl,
    iconfontUrl,
    iconfontVersion,
    codeUrl,
    env
}
