<template>
  <h1>
    <q-page class="flex gradiant">
      <landingMenu />
      <div class="gradiant ">
        <div><birdsBg /></div>
        <signinContainer :instanceName="instanceName" :instanceDescription="instanceDescription"/>
      </div>
    </q-page>
  </h1>

</template>

<script>
import landingMenu from 'components/landingPage/landingMenu'
import signinContainer from 'components/signinPage/signinContainer'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SigninPage',
  props: {
    instanceName: String,
    instanceDescription: String
  },
  components: {
    landingMenu,
    signinContainer
  }
})
</script>

<style scoped>

</style>
