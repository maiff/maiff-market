<template>
    <label class='sideMenuControl' for='sideToggle'>
        <div class="mask">
            123
        </div>
    </label>
</template>



<script>
export default {
  name: 'maiffMask'
}
</script>


<style lang="scss" scoped>
@import "../../assets/sass_tool/zIndex.scss";
@import "../../assets/sass_tool/_size.scss";
.sideMenuControl{
    display: none;
    .mask{
        position: absolute;
        top: 0;
        bottom: 0;
        @include size(100%);
        background: #000;
        transition:0.2s ease-out; 
        -webkit-transition:0.2s ease-out;
        z-index:$maskZIndex;
        opacity:0.3; 
        
    }
}
</style>