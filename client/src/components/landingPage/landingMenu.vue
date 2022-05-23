<template>
  <q-header elevated reveal class="contrasted-bg header">
    <q-toolbar>
      <q-toolbar-title class="hand-police main-color">Flockit</q-toolbar-title>
      <div><langButton/></div>
      <dark-mode-button/>
    </q-toolbar>
  </q-header>
</template>

<script>
import LangButton from 'components/includes/langButton'
import darkModeButton from 'components/includes/darkModeButton'

export default {
  name: 'landingMenu',
  components: { LangButton, darkModeButton }
}
</script>

<style scoped>

</style>
