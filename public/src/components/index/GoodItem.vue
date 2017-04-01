<template>
    <router-link :to="'/good/' + goodId">
        <div class="good-item">
                    <div class="container">
                        <img class="thumbnail" :src="imgUrl">
                        <div class="center-container">
                            <h3>{{name}}</h3>
                            <span class="time">{{time}}</span>
                            <span class="campus">松江校区</span>
                        </div>
                    </div>
                    <div class="price">
                        {{price}}￥
                    </div>
                    <div class="delete" v-show="deleteShow" @click.stop.prevent="deleteItem(goodId)">X</div>
        </div>
    </router-link>
</template>
<script>
import Cookies from 'js.cookie'
import post from '../common/post.js'
import baseUrl from '../common/baseUrl.js'
export default {
  name: 'goodItem',
  props: ['name', 'time', 'imgUrl', 'price', 'goodId'],
  computed: {
    deleteShow () {
      return Cookies.get('name') === '向王涛'
    }
  },
  methods: {
    deleteItem (goodId) {
      post(`${baseUrl}/delete`, {id: goodId}).then((res) => {
        return res.data
      })
      .then((data) => {
        data.status === 1 && window.alert('删除成功！')
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/sass_tool/base.scss";
@import "../../assets/sass_tool/_size.scss";
@import "../../assets/sass_tool/font.scss";
@import "../../assets/sass_tool/_center.scss";
.good-item{
    .delete{
        position: absolute;
        right: 0;
        bottom: 0;
        font-size: 20px;
    }
    position:relative;
    color: black;
    @include size(100%,120px);
    display: flex;
    flex-direction: row ;
    justify-content: space-between ;
    align-items:center;
    border-bottom: 1px #ccc solid;
    .container{
        display: flex;
        flex-direction: row ;
        margin-left:3%;
        align-items:center;
        img{
            @include size(80px);
            flex: 0 1 auto;
            
        }   
        .center-container{
            flex: 0 1 auto;
            margin-left:20px;
            
            margin-top: -1%;
            h3{
                font-size:15px;
                text-overflow:ellipsis;
                width:150px; 
                white-space:nowrap; 
                overflow:hidden;
            }
            .time{
                color: #aaa;
                font-size:10px;
            }
            .campus{
                border-radius: 7px;
                border:1px solid #4fbef6;
                color:#4fbef6;
                font-size:10px;
                text-align: center;
                display: block;
                width: 60px;
                margin-top: 10%;
            }
        }
    }
    
    .price{
        flex: 0 1 auto;
        color:$maincolor;
        margin-right:6%;
        margin-top: -6%;
        font-size:20px;    
    }
}
</style>