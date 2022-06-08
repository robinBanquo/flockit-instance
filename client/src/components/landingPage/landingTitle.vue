<template>
  <div class="bg-logo">
    <img v-bind:src="logoUrl" alt="" >
  </div>
  <div class="titleContainer main-color">
    <div class="flockitTitle">
      <h1 class="hand-police text-h2 r">Flockit</h1>
      <h6 class="focus-color">{{ $t('flockitDescription') }}</h6>
    </div>

      <q-card flat class="instanceInfo contrasted-bg">
        <q-card-section>
          <div class="text-h4 hand-police " >{{instanceName}}</div>
        </q-card-section>
        <q-card-section class="q-pt-none ">
          <p>{{instanceDescription}}</p>
        </q-card-section>
      </q-card>

      <a v-if="!currentUserId" href="/login" class="center-align waves-effect waves-light btn-large focus-color "><i class=" material-icons left">account_circle</i>{{$t('signIn')}}</a>

  </div>
</template>

<script>
export default {
  name: 'landingTitle',
  props: {
    instanceName: String,
    instanceDescription: String
  },
  data () {
    return {
      currentUserId: 'null'
    }
  },
  computed: {
    logoUrl: function () {
      return '/logo/flockit_logo' + (this.$q.dark.isActive ? '' : '_light') + '.png'
    }
  }
}
</script>

<style scoped lang="scss">

  .titleContainer{
    position: absolute;
    width: 600px;
    max-width: calc(100% - 60px);
    z-index: 4;
    margin: 15vh auto 122px 30px;
    h1{
      font-size: 10vh;
      margin: 20px 0;
    }
    .instanceInfo{
      transition: left 0.5s ease-in-out ;
      position:relative;
      left:5vw;
      max-width: calc(100vw - 40px);
      padding-left: 15px;
      border-left: 5px solid $focus-color;
      h3{
        font-weight: lighter;
      }
    }
  }
  .titleContainer:hover {
    .instanceInfo{
      opacity: 1;
      left: 6vw !important;
    }
  }

.bg-logo {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  img{
    height: auto;
    padding: 50px 50px 50px 50px;
    max-width: 80%;
    width: calc(80vh - 64px);
    position: absolute;
    right: 0;
    bottom:0;
  }
}
</style>
