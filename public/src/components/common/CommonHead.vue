<template>
  <mu-appbar :title="title">
      <mu-icon-button icon="keyboard_arrow_left" slot="left" @click="back" />
  </mu-appbar>
</template>

<script>
export default {
  name: 'commonHeadhead',
  data () {
    return {}
  },
  props: ['title'],
  methods: {
    back () {
      window.history.go(-1)
    }
  }
}
</script>
