<template>
  <w-flex wrap>
    <DisplayBox
      class="xs12 md6 lg4 xl2 pa1"
      v-for="img in info.ammount"
      :key="img"
      :path="info.path"
      :number="img"
      @update-count="updateCount"
    />
    <CounterDisplay :overallCount="overallCount" />
  </w-flex>
</template>

<script>
import { reactive } from 'vue'
import { useStore } from 'vuex'
import DisplayBox from './DisplayBox.vue'
import CounterDisplay from './CounterDisplay.vue'

export default {
  name: 'DisplayContainer',
  components: { DisplayBox, CounterDisplay },
  setup() {
    const store = useStore()
    const info = store.getters.getinfo
    const available = info.select?.[0]
    const overallCount = reactive({
      '4x6': 0,
      '8x10': 0,
      '11x14': 0,
      '16x20': 0,
      '20x30': 0,
    })

    function updateCount(value) {
      overallCount[value.size] = overallCount[value.size] + value.updatedValue
    }
    return { info, available, overallCount, updateCount }
  },
}
</script>
