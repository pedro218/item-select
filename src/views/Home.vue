<template>
  <div class="home">
    <Navbar />
    <DisplayContainer v-if="user.name != null" :user="user" />
  </div>
</template>

<script>
import { reactive } from 'vue'
import Navbar from '@/components/Navbar'
import DisplayContainer from '../components/images/DisplayContainer'

export default {
  name: 'Home',
  components: {
    Navbar,
    DisplayContainer,
  },
  setup() {
    const user = reactive({
      name: 'User 1',
      path: './images/',
      ammount: 13,
    })

    return { user }
  },
}
</script>
