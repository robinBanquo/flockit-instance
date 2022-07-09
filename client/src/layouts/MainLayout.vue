<template>
  <q-layout view="lHh Lpr lFf">

    <q-page-container>
      <router-view  :instanceName="instanceName" :instanceDescription="instanceDescription"/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
  },
  setup () {
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
