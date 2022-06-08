<template>
  <div class="row justify-center q-col-gutter-xl q-py-xl" id="landingHeritage">
    <div class="col-sm-7 col-xs-12">
      <div class="row q-py-xs justify-center">
        <div class="col-sm-3 col-xs-12 q-pa-md text-center">
          <img  v-bind:src="logoUrl" alt="" class="bird-background q-pa-md focus-border light-bg shadow-2" style="border-radius: 20%">
        </div>
        <div class="col-md-6 q-pa-md">
          <p >{{this.$t('heritage')}}</p>
          <p >{{this.$t('whyNew')}}</p>
        </div>
      </div>
      <div class="row q-col-gutter-xl q-pa-md">
        <div class="col-sm-6 col-xs-12" v-for="item in mainNews" :key="item.title">
          <q-card class="bird-background main-bg">

            <q-card-section class="q-pt-xl">
              <div class="img text-center ">
                <div class="img text-center ">
                  <q-icon :name="item.icon" class="focus-color" size="xl" alt=""/>
                </div>
              </div>
              <div class="text-h5 text-center hand-police focus-color" >{{ $t(item.title) }}</div>
            </q-card-section>
            <q-card-section class="text-justify">
                <p> {{ $t(item.text1) }}</p>
                <p> {{ $t(item.text2) }}</p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'landingHeritage',
  data () {
    return {
      mainNews:
        [
          {
            title: 'decentralisity',
            text1: 'decentralisity1',
            text2: 'decentralisity2',
            icon: 'hub'
          },
          {
            title: 'modularity',
            text1: 'modularity1',
            text2: 'modularity2',
            icon: 'extension'
          }
        ]
    }
  },
  computed: {
    logoUrl: function () {
      return '/logo/systemd-logo-' + (this.$q.dark.isActive ? 'white' : 'dark') + '.png'
    }
  }
}
</script>

<style scoped lang="scss">
#landingHeritage{
}
</style>
