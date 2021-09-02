<template>
  <div class="home">
    <Navbar />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar'
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'Home',
  components: {
    Navbar,
    HelloWorld,
  },
}
</script>
