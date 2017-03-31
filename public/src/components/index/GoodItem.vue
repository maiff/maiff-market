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
        </div>
    </router-link>
</template>
<script>
export default {
  name: 'goodItem',
  props: ['name', 'time', 'imgUrl', 'price', 'goodId']
}
</script>
<style lang="scss" scoped>
@import "../../assets/sass_tool/base.scss";
@import "../../assets/sass_tool/_size.scss";
@import "../../assets/sass_tool/font.scss";
@import "../../assets/sass_tool/_center.scss";
.good-item{
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