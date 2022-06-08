<template>
  <q-layout view="lHh Lpr lFf">

    <q-page-container>
      <router-view />
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
    console.log(this.$q.lang.getLocale())
    this.$q.lang.set('fr') //  this.$q.lang.getLocale())
    return {}
  }
})
</script>
