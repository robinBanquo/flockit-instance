
<script>
import { defineComponent } from 'vue'
import landingMenu from 'components/landingPage/landingMenu.vue'
import landingTitle from 'components/landingPage/landingTitle.vue'
import birdsBg from 'components/includes/birdsBg'
import landingPlus from 'components/landingPage/landingPlus'
import landingAim from 'components/landingPage/landingAim'
import landingVision from 'components/landingPage/landingVision'
import landingHeritage from 'components/landingPage/landingHeritage'
import landingContact from 'components/landingPage/landingContact'

export default defineComponent({
  name: 'IndexPage',
  components: {
    landingMenu,
    landingTitle,
    birdsBg,
    landingPlus,
    landingAim,
    landingVision,
    landingHeritage,
    landingContact
  },
  props: {
    instanceName: String,
    instanceDescription: String
  }
})
</script>
<template>

  <q-page class="flex gradiant">
    <landingMenu />
    <div class="gradiant ">
      <div><birdsBg /></div>
      <landingTitle :instanceName="instanceName" :instanceDescription="instanceDescription"/>
    </div>
  </q-page>

  <q-page class="contrasted-bg flex-center">
    <landingAim/>
  </q-page>
  <div class="contrasted-bg ">
    <landing-vision/>
  </div>
  <q-page class="main-bg bird-background">
    <landingPlus/>
  </q-page>
  <div class="contrasted-bg ">
    <landingHeritage/>
  </div>
  <q-page class="main-bg bird-background">
    <landingContact/>
  </q-page>
</template>
