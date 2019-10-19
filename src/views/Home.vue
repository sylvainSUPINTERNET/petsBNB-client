<template>
  <div class="home">
    <div>
      <b-alert show>Default Alert</b-alert>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  beforeCreate(){
    //console.log(this.$store.getters.userToken);
  },
  components: {
    HelloWorld
  }
}
</script>
