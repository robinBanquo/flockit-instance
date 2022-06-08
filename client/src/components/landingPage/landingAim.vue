<template>
  <div class="row q-col-gutter" id="landingAim">
    <div class="col-xl-2 col-sm-1 col-xs-1"></div>
    <div class="col-xl-8 col-sm-10 col-xs-10">
      <div class="row justify-center q-col-gutter-xl">
        <div class="col-sm-5 col-xs-12">
          <q-card class="main-bg bird-background">
            <q-parallax v-bind:src="imgUrl"  :height="250" class="lighter-bg ">
              <div class="absolute-bottom text-h5 hand-police focus-color ">
                {{ $t('ourConstatTitle') }}
              </div>
            </q-parallax>
            <q-card-section>

                <p class="info-quotes small-text text-justify"> {{ $t('ourConstat1') }}</p>
                <p class="info-quotes small-text text-justify"> {{ $t('ourConstat2') }}</p>

            </q-card-section>
          </q-card>
        </div>
        <div class="col-sm-7 col-xs-12">
          <h5 class="hand-police focus-color">{{ $t('ourObjective')}}</h5>
          <q-list >
            <q-expansion-item  v-for="(item, i) in objectiveList" :key="i" popup default-opened  :icon="item.icon" :label="item.title" :caption="item.caption">
              <q-separator />
              <q-card>
                <q-card-section class="light-bg bird-background  text-justify">
                  {{ item.content }}
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>
      </div>

    </div>
    <div class="col-xl-2 col-sm-1 col-xs-1"></div>
  </div>

</template>

<script>
export default {
  name: 'landingAim',
  data () {
    return {
      objectiveList: [
        {
          title: this.$t('objectif1Title'),
          icon: '',
          content: this.$t('objectif1content'),
          caption: ''
        },
        {
          title: this.$t('objectif2Title'),
          icon: '',
          content: this.$t('objectif2content'),
          caption: ''
        }
      ]
    }
  },
  computed: {
    imgUrl: function () {
      return '/logo/flockit_logo' + (this.$q.dark.isActive ? '' : '_light') + '.png'
      // return '/trame/fond_bulles' + (this.$q.dark.isActive ? '' : '_light') + '.jpg'
    }
  }
}
</script>

<style scoped lang="scss">
 #landingAim{
   padding-top: 15vh;
   .hand-police{
     margin: 10px 30px;
   }
   li{
      padding: 10px;
   }
 }
</style>
