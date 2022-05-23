<template>
  <q-header elevated>
    <q-toolbar>
      <q-toolbar-title>
        Flockit
      </q-toolbar-title>

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
