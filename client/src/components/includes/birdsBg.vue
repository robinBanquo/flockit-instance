<template>
  <div class="bird-container">
    <iframe
      class="boids-iframe"
      v-bind:src="url"
    ></iframe>
  </div>

</template>

<script>
export default {
  name: 'birdsBg',
  computed: {
    url: function () {
      return '/improv-wip-gh-pages/demos/boids/boids' + (this.$q.dark.isActive ? '2' : '3') + '.html'
    }
  }
}
</script>

<style scoped lang="scss">
  .bird-container{
    border:none;
    left:0;
    right: 0;
    position: absolute;
    top: 0;
    bottom:0;
    z-index:1;
    iframe{
      border:none;
      width: 100%;
      height: calc(100% - 50px);
      html, body, .model{
        width: 100%;
        height: 100%;
      }
    }
  }

</style>
