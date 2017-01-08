<template>
   <aside><h2>Side Menu</h2></aside>
</template>



<script>
export default {
  name: 'maiffSide'
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
</style>