<template>
   <aside>
     <div class="container">
        <MaiffSideUser></MaiffSideUser>
        <hr>
        <OptionContainer></OptionContainer>
     </div>
   </aside>
</template>



<script>
import MaiffSideUser from './MaiffSideUser'
import OptionContainer from './OptionContainer'
export default {
  name: 'maiffSide',
  components: {
    MaiffSideUser,
    OptionContainer
  }
}
</script>


<style lang="scss" scoped>
@import "../../assets/sass_tool/zIndex.scss";
aside{
    position:absolute; 
    top:0; 
    bottom:0; 
    left:-60%; 
    width:60%; 
    background:#fff; 
    transition:0.2s ease-out; 
    -webkit-transition:0.2s ease-out; 
    z-index:$sideZIndex;
}
.container{
    margin: 20px;
      hr{
        margin-top: 20px;
      }
}
</style>