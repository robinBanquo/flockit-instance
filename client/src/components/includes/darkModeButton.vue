<template>
  <div>
    <q-toggle v-model="value" @click="modeToggle" class="main-color"/>
    <q-tooltip>
      {{ value ? $t('darkMode') : $t('lightMode')  }}
    </q-tooltip>
  </div>
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
