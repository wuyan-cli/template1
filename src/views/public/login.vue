<!--
 * @Description: 文件内容描述
 * @Date: 2023-04-19 17:05:30
 * @LastEditors: 无言的对话
 * @LastEditTime: 2023-04-24 16:34:03
 * @FilePath: \vue2\src\views\public\login.vue
-->
<template>
    <div class="login-container">
        <div class="login-from">
            <el-form status-icon :rules="loginRules" ref="loginForm" :model="loginForm" label-width="0">
                <el-form-item prop="account">
                    <el-input size="small" prefix-icon="el-icon-user" placeholder="请输入账号" @keyup.enter.native="handleLogin"
                        v-model="loginForm.account" auto-complete="off">
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input prefix-icon="el-icon-lollipop" size="small" @keyup.enter.native="handleLogin"
                        placeholder="请输入密码" :type="passwordType" v-model="loginForm.password" auto-complete="off">
                        <i class="el-icon-view el-input__icon" slot="suffix" @click="showPassword"></i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="code">
                    <el-row :span="24">
                        <el-col :span="16">
                            <el-input size="small" @keyup.enter.native="handleLogin" v-model="loginForm.code"
                                auto-complete="off">
                                <i slot="prefix" class="icon-yanzhengma" />
                            </el-input>
                        </el-col>
                        <el-col :span="8">
                            <div class="login-code">
                                <img :src="loginForm.image" class="login-code-img" @click="refreshCode" />
                            </div>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" size="small" @click.native.prevent="handleLogin" class="login-submit">登录
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginForm: {
                //用户名
                account: '',
                //密码
                password: '',
                //验证码的值
                code: '',
                //验证码的索引
                key: '',
                image: 'data:image/png;base64,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',

            },
            loginRules: {
                account: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 1, message: '密码长度最少为6位', trigger: 'blur' },
                ],
            },
            passwordType: 'password',
        }
    },
    methods: {
        handleLogin() {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    const loading = this.$loading({
                        lock: true,
                        text: '登录中,请稍后。。。',
                        spinner: 'el-icon-loading',
                    })
                    this.$store.dispatch('LoginByUsername', this.loginForm).then((response) => {
                        console.log('data')
                        this.$router.push('/')
                        loading.close()
                    }).catch(() => {
                        loading.close()
                    })
                }
            })
        },
        refreshCode() {
            getCaptcha().then((res) => {
                const data = res.data.data
                this.loginForm.key = data.key
                this.loginForm.image = data.image
            })
        },
        showPassword() {
            this.passwordType === ''
                ? (this.passwordType = 'password')
                : (this.passwordType = '')
        },
    }

}
</script>

<style lang="less" scoped>
.login-container {
    position: relative;
    height: 100%;

    .login-from {
        position: absolute;
        width: 400px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        border-radius: 10px;
        padding: 20px;
    }

    .login-code-img {
        margin-top: 2px;
        width: 100px;
        height: 38px;
        background-color: #fdfdfd;
        border: 1px solid #f0f0f0;
        color: #333;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 5px;
        line-height: 38px;
        text-indent: 5px;
        text-align: center;
        cursor: pointer !important;
        margin-left: 10px;
    }

    .login-submit {
        width: 100%;
        height: 45px;
        border: 1px solid #409EFF;
        background: none;
        font-size: 18px;
        letter-spacing: 2px;
        font-weight: 300;
        color: #409EFF;
        cursor: pointer;
        margin-top: 30px;
        font-family: "neo";
        transition: 0.25s;
    }

}
</style>