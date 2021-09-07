<template>
  <w-flex wrap>
    <DisplayBox
      class="xs12 md6 lg4 xl2 pa1"
      v-for="img in info.ammount"
      :key="img"
      :path="info.path"
      :number="img"
    />
  </w-flex>
</template>

<script>
import { useStore } from 'vuex'
import DisplayBox from './DisplayBox.vue'

export default {
  name: 'DisplayContainer',
  components: { DisplayBox },
  setup() {
    const store = useStore()
    const info = store.getters.getinfo
    return { info }
  },
}
</script>
