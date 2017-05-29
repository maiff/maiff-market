<template>
  <mu-snackbar v-if="snackbar" :message="toastMes" @close="hideSnackbar"/>
</template>

<script>
export default {
  name: 'maifftoast',
  data () {
    return {
    }
  },
  methods: {
    hideSnackbar () {
      this.snackbar = false
      if (this.snackTimer) clearTimeout(this.snackTimer)
    }
  },
  computed: {
    toastMes () {
      return this.$store.state.mask.toastMes
    },
    snackbar: {
      get () {
        return this.$store.state.mask.toast
      },
      set (value) {
        this.$store.commit('toggleToast', value)
      }
    }
  }
}
</script>