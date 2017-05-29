<template>
  <main>
    <div class="img-container">
      <swiper :options="swiperOption" ref="mySwiper" class="my-swiper">
        <!-- slides -->

        <swiper-slide v-for="img in imgUrl"><img :src="img" alt="" /></swiper-slide>
        
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-scrollbar"   slot="scrollbar"></div>
      </swiper>
    </div>
    <mu-paper class="maiff-paper" :zDepth="2">
      <div class="name">
        {{name}}
      </div>
      <div class="price">
          <span>￥</span>{{price}}
      </div>
      <div class="time">
          发布：{{time}}
      </div>
    </mu-paper>
    <mu-paper class="maiff-paper contact" :zDepth="2">
      <div class="tip" v-show="!show">
        <p>登录后查看全部</p>
        <mu-divider />
      </div>
      <span class="name">{{ownName}}</span>
      <span class="value">{{type}}:{{value}}</span>
    </mu-paper>
    <mu-paper class="maiff-paper" :zDepth="2">
      <dl>
        <dt>物品详情：</dt>
        <mu-divider />
        <dd>{{detail}}</dd>
      </dl>
    </mu-paper>    
    <mu-paper class="maiff-paper" :zDepth="2">
      <div class="comment-container">
        <div class="tip" v-show="!show">
          <p>登录后查看发布评论</p>
          <mu-divider />
        </div>
        <div v-show="show" class="comment">
          <mu-text-field hintText="发布评论" multiLine :rows="3" :rowsMax="6" v-model="commentContent" fullWidth/><br/>
          
          <mu-raised-button label="添加评论" class="addButton" @click="addComment()" primary/>
          <ul>
            <dl v-for="comment in commentList">
              <dt>{{comment.name}}</dt>
              <hr>
              <dd>{{comment.content}}</dd>
            </dl>
          <ul>
        </div>
      </div>
    </mu-paper>    
  </main>
</template>

<script>
import getDetail from './getDetail.js'
import getCommentList from './getCommentList.js'
import addComment from './addComment.js'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  name: 'goodDetail',
  mounted () {
    this.$store.commit('updateGoodId', this.$route.params.id)
    this.$store.commit('clearComment')
    getDetail(this.$route.params.id).then((res) => {
      return res.data
    })
    .then((data) => {
      ({
        name: this.name,
        price: this.price,
        time: this.time,
        detail: this.detail
      } = data)
      this.ownName = data.own + (this.$store.state.autoInfo.isLogined ? '' : 'XX')
      this.value = data.contact.is + (this.$store.state.autoInfo.isLogined ? '' : 'XXXXXXXX')
      this.type = data.contact.what
      this.imgUrl = data.imgUrl
    })
    getCommentList(this.$route.params.id).then((res) => {
      return res.data
    })
    .then((data) => {
      console.log(data)
      this.$store.commit('updateCommentList', data)
    })
  },
  data () {
    return {
      name: '',
      price: '',
      time: '',
      ownName: '',
      type: '',
      value: '',
      detail: '这家伙很懒什么都没有留下～',
      imgUrl: ['http://7xpser.com1.z0.glb.clouddn.com/1480223588159.jpg'],
      swiperOption: {
        // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        autoplay: 3000,
        direction: 'horizontal',
        grabCursor: true,
        setWrapperSize: true,
        // width: '100%',
        // height: '100%',
        // autoHeight: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        scrollbar: '.swiper-scrollbar',
        mousewheelControl: true,
        observeParents: true,
        // if you need use plugins in the swiper, you can config in here like this
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true,
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        onTransitionStart (swiper) {
          console.log(swiper)
        }
        // more Swiper configs and callbacks...
        // ...
      }
    }
  },
  computed: {
    commentList () {
      return this.$store.state.comment.commentList
    },
    show () {
      return this.$store.state.autoInfo.isLogined
    },
    commentContent: {
      get () {
        return this.$store.state.comment.commentContent
      },
      set (value) {
        this.$store.commit('addComment', value)
      }
    }
  },
  methods: {
    addComment () {
      if (this.$store.state.comment.commentContent === '') window.alert('必须要有评论！')
      else {
        addComment().then((res) => {
          return res.data
        })
        .then((data) => {
          if (data.status === 1) {
            getCommentList(this.$route.params.id).then((res) => {
              return res.data
            })
            .then((data) => {
              console.log(data)
              this.$store.commit('updateCommentList', data)
              this.$store.commit('clearComment')
            })
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
.my-swiper{
  @include size(100%);
}
.maiff-paper {
  margin-bottom: 10px;
}

main{
  background: #eee !important;
	.img-container{
		@include size(100%,250px);
		img{
			@include size(100%);
		}
	}
	.name{
		width:90%;
		padding:10px;
		font-size:20px;
		word-wrap: break-word; 
		word-break: normal; 
		font-family: Tahoma,Helvetica,Arial,"\5b8b\4f53",sans-serif;
	}
	.price{
		color: #ea301c;
    	padding:0 10px;
    	font-size: 26px;
    	span{
    		font-size: 20px;
    	}
	}
	.time{
		color: #888;
		padding:5px 12px;
    	font-size: 13px;
	}
	.hr{
		background:#eee;
		@include size(100%,15px);
		opacity:.4;
	}
	.contact{
    padding: 10px;
		line-height:20px;
		.value{
			float:right;
			margin-right:10px;
		}
	}
	.tip{
		padding:10px;
		hr{
			margin:10px 0;
			opacity:.5;
		}
	}
	dl{
		padding:10px;
		dt{
			color:#888;
			font-size:15px;
		}
		hr{
			margin:10px 0;
			opacity:.5;
		}
	}

}
.comment{
  padding: 10px;
  textarea{
    margin: 10px auto;
    width: 100%;
  }
}


</style>