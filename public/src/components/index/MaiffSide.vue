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
    left:-200px; 
    width:50%; 
    background:#f1103a; 
    transition:0.2s ease-out; 
    -webkit-transition:0.2s ease-out; 
    z-index:$sideZIndex;
}
</style>