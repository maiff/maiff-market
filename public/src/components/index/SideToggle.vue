<template>
    <input type='checkbox' id='sideToggle'>
</template>



<script>
export default {
  name: 'sideToggle'
}
</script>


<style >
#sideToggle{ display:none; }
#sideToggle:checked + aside{left:0; } 
#sideToggle:checked ~ .sideMenuControl{ display: block;} 
</style>