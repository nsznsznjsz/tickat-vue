<template>
  <div :class="$style.footer">
    <p>第三方登录</p>
    <div>
      <a :class="$style.qq" @click="clickHandle('qq')">
        <i class="fa fa-qq" aria-hidden="true" />
      </a>
      <a :class="$style.wechat" @click="clickHandle('wechat')">
        <i class="fa fa-weixin" aria-hidden="true" />
      </a>
      <a :class="$style.github" @click="clickHandle('github')">
        <i class="fa fa-github" aria-hidden="true" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class LoginFooter extends Vue {
  href = {
    qq: '',
    wechat: '',
    github: ''
  }

  async created() {
    try {
      const { data } = await this.$http.post('/api/login/oauth')

      this.href.qq = data.qq
      this.href.wechat = data.wechat
      this.href.github = data.github
    } catch (e) {
      // TODO handle error
    }
  }

  clickHandle(name: string) {
    this.$message('小哥正在紧急开发中')
    // window.location.href = (this.href as Record<string, string>)[name]
  }
}
</script>

<style lang="scss" module>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  border-top: solid 1px #e6e9f1;
  p {
    margin-bottom: 15px;
  }
  div a {
    margin: 7.5px;
    border-radius: 50%;
    backface-visibility: hidden;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    display: inline-flex;
    transition: 0.7s;
    text-decoration: none;
    &:hover {
      opacity: 0.6;
      filter: alpha(opacity=60);
    }
    i {
      font-size: 16px;
      color: white;
    }

    &.qq {
      background-color: #12b7f5;
    }
    &.wechat {
      background-color: #44b549;
    }
    &.github {
      background-color: #24292e;
    }
    &.facebook {
      background-color: #3b5998;
    }
    &.twitter {
      background-color: #55acee;
    }
    &.google {
      background-color: #dd4b39;
    }
    &.pinterest {
      background-color: #cb2027;
    }
    &.btc {
      background-color: #ff6600;
    }
    &.tumblr {
      background-color: #32506d;
    }
    &.vk {
      background-color: #45668e;
    }
    &.reddit {
      background-color: #5f99cf;
    }
  }
}
</style>
