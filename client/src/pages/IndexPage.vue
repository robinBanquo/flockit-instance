
<script>
import { defineComponent } from 'vue'
import landingMenu from 'components/landingPage/landingMenu.vue'
import landingTitle from 'components/landingPage/landingTitle.vue'
import birdsBg from 'components/includes/birdsBg'

export default defineComponent({
  name: 'IndexPage',
  components: {
    landingMenu,
    landingTitle,
    birdsBg
  },
  data () {
    return {
      instanceName: 'Instance Expérimentale',
      instanceDescription: 'instance expérimentale de flockit'
    }
  }
})
</script>
<template>
  <landingMenu />
  <q-page class="text-center flex gradiant">
    <div class="gradiant ">
      <birdsBg />
      <landingTitle :instanceName="instanceName" :instanceDescription="instanceDescription"/>
    </div>

  </q-page>
</template>
