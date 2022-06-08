<template>
  <div class="row justify-center q-col-gutter-xl q-py-xl">
    <h4 class="hand-police focus-color center-align q-mt-xl" >
      <img src="/icons/message_icon.png" alt="" class="responsive-img lighter-bg center-align focus-border shadow" style="padding: 10px; border-radius: 50%">
      <br>{{ $t('contact')}}<br><br>
    </h4>
  </div>
  <div class="row justify-center q-col-gutter-xl ">
    <div v-for="link in links" class="col-md-4  text-center" :key="link.title">
      <q-btn class="btnStandard" :icon="link.icon" :label="$t(link.title)" href="https://github.com/HUB-HUmanBeing/SystemD" />
      <p class="main-color q-ma-md">
        {{$t(link.text)}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'landingContact',
  data () {
    return {
      links:
        [
          {
            title: 'github',
            link: 'https://github.com/robinBanquo/flockit-central',
            text: 'githubText',
            icon: 'group'
          },
          {
            title: 'mail',
            link: 'https://github.com/robinBanquo/flockit-central',
            text: 'mailText',
            icon: 'email'
          }
        ]
    }
  }
}
</script>

<style scoped>

</style>
