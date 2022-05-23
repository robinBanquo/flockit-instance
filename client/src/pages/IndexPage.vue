
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
      instanceDescription: `Cette instance a pour vocation de permettre
       le test de flockit et d'offrir au public la possibilité de découvrir l'application.
       Elle est gérée et hébergée par les créateurs de cet outil`

    }
  }
})
</script>
<template>

  <q-page class="flex gradiant">
    <landingMenu />
    <div class="gradiant ">
      <birdsBg />
      <landingTitle :instanceName="instanceName" :instanceDescription="instanceDescription"/>
    </div>

  </q-page>
</template>
