<template>
  <div class="home">
    <Navbar />
    <DisplayContainer v-if="user.length != null" />
  </div>
</template>

<script>
import { useStore } from 'vuex'
import Navbar from '@/components/Navbar'
import DisplayContainer from '../components/images/DisplayContainer'

export default {
  name: 'Home',
  components: {
    Navbar,
    DisplayContainer,
  },
  setup() {
    const store = useStore()
    const user = store.getters.getUser
    return { user }
  },
}
</script>
