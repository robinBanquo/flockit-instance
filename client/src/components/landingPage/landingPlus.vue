<template>
  <div class="row">
    <div class="col-xl-2 col-sm-1 col-xs-0"></div>
    <div class="col-xl-8 col-sm-10 col-xs-12">
      <div id="landingPlus" class="main-color  row justify-center q-col-gutter-md ">

        <div v-for="item in plusItems" class="col-sm-6 col-xs-12 padding" :key="item.id">
          <q-card   class="contrasted-bg ">
            <q-card-section>
              <div class="img text-center ">
                <img :src="item.iconUrl" class="focus-border light-bg shadow-2" alt="">
              </div>
              <div class="text-h5 text-center hand-police" >{{item.title}}</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              <p class="text-justify">{{item.info}}</p>
            </q-card-section>
          </q-card>
        </div>
    </div>
    <div class="col-xl-2 col-sm-1 col-xs-0"></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'landingPlus',
  data () {
    return {
      plusItems: [
        {
          id: '0',
          title: this.$t('encrypted'),
          iconUrl: '/logo/categories/digital.png',
          info: this.$t('encryptedInfo')
        },
        {
          id: '1',
          title: this.$t('modular'),
          iconUrl: '/logo/categories/construction.png',
          info: this.$t('modularInfo')
        },
        {
          id: '2',
          title: this.$t('decentralized'),
          iconUrl: '/logo/categories/logistic_and_transport.png',
          info: this.$t('decentralizedInfo')
        },
        {
          id: '3',
          title: this.$t('free'),
          iconUrl: '/logo/categories/childcare.png',
          info: this.$t('freeInfo')
        },
        {
          id: '4',
          title: this.$t('anonymous'),
          iconUrl: '/logo/categories/militancy.png',
          info: this.$t('anonymousInfo')
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
#landingPlus{
  padding: 5vw;
  .q-card{
    margin-top: 100px;
  }
  .img {
    height: 40px;
    position: relative;
    img{
      width: 90px;
      height: 90px;
      border-radius: 50%;
      position: relative;
      top:-65px

    }
  }

}
</style>
