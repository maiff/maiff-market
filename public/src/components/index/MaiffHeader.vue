<template>
  <div>
    <mu-appbar title="二手工坊">
      <mu-icon-button icon="menu" slot="left" @click="toggle(true)"/>
      <p slot="right" class="sub-title">{{campus}}</p>
    </mu-appbar>
    <mu-drawer :open="open" :docked="docked" @close="toggle()">
      <mu-list-item :title="name" style="margin:30px">
        <mu-avatar src="https://avatars2.githubusercontent.com/u/13074462?v=3&s=88" slot="leftAvatar"/>
      </mu-list-item>

      <mu-flexbox v-if="!isShow">
        <mu-flexbox-item class="user-option" style="text-align:center">
          <router-link to="/register">
            注册
          </router-link>  
        </mu-flexbox-item>
        <mu-flexbox-item class="user-option">
          <router-link to="/login">
            登录
          </router-link>   
        </mu-flexbox-item>
      </mu-flexbox>

      <mu-list v-if="isShow">
        <router-link to="/addgood">
          <mu-list-item title="上传物品"/>
        </router-link> 
        <router-link to="/mylist">
          <mu-list-item title="我的上传"/>
        </router-link> 
        <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
      </mu-list>
    </mu-drawer>
  </div>
</template>

<script>
export default {
  name: 'maiffHeader',
  data () {
    return {
      campus: '东华大学',
      open: false,
      docked: true
    }
  },
  methods: {
    toggle (flag) {
      this.open = !this.open
      this.docked = !flag
    }
  },
  computed: {
    isShow () {
      return this.$store.state.autoInfo.isLogined
    },
    name () {
      return this.$store.state.autoInfo.name
    }
  }
}
</script>

<style lang="scss" scoped>

  .user-option {
    text-align: center;
  }
</style>