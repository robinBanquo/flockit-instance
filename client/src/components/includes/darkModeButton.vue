<template>
  <div><q-toggle v-model="value" @click="modeToggle" label="dark" /></div>
</template>

<script>
export default {
  data () {
    this.$q.dark.toggle()
    return {
      value: true
    }
  },
  methods: {
    modeToggle () {
      this.$q.dark.toggle()
      this.value = !!this.value
    }
  }
}
</script>
