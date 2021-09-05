<template>
  <w-flex wrap>
    <DisplayBox
      class="xs12 md6 lg4 xl2 pa1"
      v-for="img in ammount"
      :key="img"
      :path="path"
      :number="img"
    />
  </w-flex>
</template>

<script>
import { ref } from 'vue'
import DisplayBox from './DisplayBox.vue'

export default {
  name: 'DisplayContainer',
  components: { DisplayBox },
  props: {
    user: Object,
  },
  setup(props) {
    const path = ref(props.user.path)
    const ammount = ref(props.user.ammount)

    return { path, ammount }
  },
}
</script>
