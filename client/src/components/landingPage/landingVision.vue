<template>
  <div class="row justify-center q-col-gutter-xl" id="landingVision">
    <div class="col-sm-7 col-xs-12 ">
      <div class="hr" style="margin:0 0 10vh 0"></div>
      <div class="row">
        <div  id="ourVisionimg" class="col-sm-3 col-xs-12 text-center" v-scroll-fire="launchAnimation">
          <img src="/logo/categories/solidarity.png" alt="" class="focus-border bird-background light-bg shadow-2">
          <h5 class="hand-police focus-color">{{this.$t('ourVision')}}</h5>
        </div>
        <div id="ourVisionContent1" class="col-sm-9 col-xs-12 q-pa-md text-justify" v-scroll-fire="launchAnimation"><p >{{this.$t('ourVisionContent1')}}</p></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'landingVision',
  setup () {
    return {
      launchAnimation (el) {
        el.classList.add('animate')
        setTimeout(() => {
          if (document.body.contains(el)) {
            el.classList.remove('animate')
          }
        }, 2000)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  #landingVision{
    img{
      border-radius: 10%;
    }
  }
  #ourVisionimg.animate{
    animation: q-bounce 2s infinite
  }
  #ourVisionContent1.animate{
    animation: q-bounce2 2s infinite
  }

  @keyframes q-bounce{
    0%, 20%, 50%, 80%, 100%{transform: translateX(0)}
    40%{transform: translateX(-30px)}
    60%{transform: translateX(-15px)}
  }
  @keyframes q-bounce2{
    0%, 20%, 50%, 80%, 100%{transform: translateX(0)}
    40%{transform: translateX(30px)}
    60%{transform: translateX(15px)}
  }
</style>
