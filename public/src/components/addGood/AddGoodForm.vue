<template>
  <div>
    <form id="form" v-on:submit.prevent="submit">
      <mu-text-field label="名称" hintText="请输入名称" type="text" v-model="name" labelFloat fullWidth /><br/>
      <mu-text-field label="价格" hintText="价格大于0" type="text" v-model="price" labelFloat fullWidth /><br/>
      <mu-select-field v-model="contactType" label="选择联系类型" fullWidth>
        <mu-menu-item value="QQ" title="QQ"/>
        <mu-menu-item value="WX" title="WX"/>
        <mu-menu-item value="phone" title="phone"/>
      </mu-select-field>
      <mu-text-field label="联系方式" hintText="填写符合上述种类的联系方式" type="text" v-model="contactValue" labelFloat fullWidth /><br/>      
      <mu-text-field label="描述" hintText="输入物品描述……" multiLine :rows="3" :rowsMax="6" v-model="goodDetail" labelFloat fullWidth/><br/>
      <div class="file-field">
          <div class="img-container" v-for="img in imgList" :style="'background-image:url(' + img + ')'">
          </div>
        <div class="file-container">
          <i class="plus icon-plus-copy">           
          </i>
          <input type="file" accept="image/*" @change="upload($event)">
        </div>
      </div>
      <mu-raised-button label="提交" class="demo-raised-button" primary fullWidth @click="submit()"/>
    </form> 
  </div>
</template>

<script>
import upload from './upload.js'
import post from './post.js'

export default {
  name: 'addGoodForm',
  data () {
    return {
      uploading: false
    }
  },
  computed: {
    validation: function () {
      return {
        name: !!this.name.trim(),
        price: +this.price > 0 && Number(this.price) === Number(this.price),
        contactValue: !!this.contactValue.trim(),
        img: !this.uploading
      }
    },
    imgList () {
      return this.$store.state.goodInfo.imgUrl
    },
    name: {
      get () {
        return this.$store.state.goodInfo.goodName
      },
      set (value) {
        this.$store.commit('updategoodName', value)
      }
    },
    price: {
      get () {
        return this.$store.state.goodInfo.goodPrice
      },
      set (value) {
        this.$store.commit('updategoodPrice', '' + value)
      }
    },
    contactType: {
      get () {
        return this.$store.state.goodInfo.contactType
      },
      set (value) {
        this.$store.commit('updatecontactType', value)
      }
    },
    contactValue: {
      get () {
        return this.$store.state.goodInfo.contactValue
      },
      set (value) {
        this.$store.commit('updatecontactValue', '' + value)
      }
    },
    goodDetail: {
      get () {
        return this.$store.state.goodInfo.goodDetail
      },
      set (value) {
        this.$store.commit('updategoodDetail', value)
      }
    }
  },
  methods: {
    upload (event) {
      this.uploading = true
      this.$store.commit('pushimgUrl', 'http://7xpser.com1.z0.glb.clouddn.com/loading.96c5cf34.gif')
      upload(event.target.files[0])
      // Promise.resolve({url: 'http://ojawyv8qo.bkt.clouddn.com/ee835f91d5a03b496e7fbec838e82d9c'})
      .then((data) => {
        if (data.error) {
          window.alert('请先登录！')
          this.$router.push('/login')
        } else {
          this.$store.commit('modifyLast', data.url)
          this.uploading = false
          return data.url
        }
      })
      // .then((url) => {
      //   let img = document.createElement('div')
      //   img.className = 'img-container'
      //   img.style.background = `url(${url})`
      //   event.target.parentNode.parentNode.insertBefore(img, event.target.parentNode)
      // })
    },
    isValid: function () {
      let errorInfo = {
        name: '物品名称必须有！',
        price: '价格必须大于0且必须为数字！',
        contactValue: '联系方式必须有！',
        img: '有图片正在上传！'
      }
      let validation = this.validation
      return Object.keys(validation).every(function (key) {
        validation[key] || window.alert(errorInfo[key])
        return validation[key]
      })
    },
    submit () {
      if (this.isValid()) {
        post().then((res) => {
          return res.data
        })
        .then((data) => {
          if (data.error) {
            window.alert('请先登录！')
            this.$router.push('/login')
          } else {
            data.err && window.alert(`失败,${data.err}`)
            if (data.err === undefined) {
              this.$store.commit('clear')
              window.alert('上传成功！')
              this.$router.push('/')
            }
          }
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
    @import "../../assets/sass_tool/base.scss";
    @import "../../assets/sass_tool/_size.scss";
    @import "../../assets/sass_tool/_center.scss";
    @import "../../assets/sass_tool/font.scss";
    form{
      position: relative;
      width: 90%;
      margin: 10% auto;
      .input-field{
        margin: 30px 0;
        overflow: hidden;
        display: flex;
        label{
          font-size: 18px;
          line-height: 30px;
          flex: 0 1 auto;
          white-space:nowrap;
          width: 72px;
        }
        input{
          flex: 1;
          @include size(75%,30px);
          border: solid 1px #1989fa;
          border-radius: 3px;
          padding-left: 5px;
          font-size: 18px;
        }
      }
      textarea{
        flex: 1;
        height:70px;
        border: solid 1px #1989fa;
        border-radius: 3px;
      }
      input[type="submit"]{
        @include size(100%,40px);
        background: #1989fa;
        line-height: 40px;
        color: #fff;
        font-size: 20px;
        border: none;
        margin:15px 0;
      }
      .file-field{
        display: flex;
        flex-wrap: wrap;
        .img-container{
          width: 30%;
          height: 0;
          padding-bottom: 30%;
          margin-right: 3%;
          margin-bottom: 3%;
          background-repeat: no-repeat !important;
          background-size: 100% !important;
        }
        .file-container{
          width: 30%;
          height: 0;
          padding-bottom: 30%;
          position: relative;
          display:inline;
          border: 5px #ccc dashed;
          box-sizing: border-box;
        }
        i{
          @include center();
          font-size: 4rem !important;
          color: #ccc;
        }
        input[type="file"]{
          opacity:0;
          padding-bottom: 100%;
          @include size(100%);
          cursor:pointer;
          flex:0;
        }
      }
      .login-choose{
        text-align: center;
        a{
          color: #1989fa;
        }
      }
    }
    @media  (min-width: 450px){
      form{
          // @include center();
          margin: 0 auto !important;
      }
    }
</style>