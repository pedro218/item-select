<template>
  <w-card class="box">
    <div class="image">
      <img :src="location" alt="image" />
    </div>
    <div>
      <w-flex wrap>
        <w-select
          class="xs12 md6 lg4"
          v-for="size in sizes"
          :key="size"
          :items="options"
          outline
          v-model="selected[size]"
        >
          {{ size }}
        </w-select>
      </w-flex>
    </div>
  </w-card>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'DisplayBox',
  props: {
    path: String,
    number: Number,
  },
  setup(props) {
    const path = ref(props.path)
    const number = ref(props.number)
    const location = `${path.value}${number.value}.jpg`

    const selected = reactive({
      '4x6': null,
      '8x10': null,
      '11x14': null,
      '16x20': null,
      '20x30': null,
    })

    const sizes = ref(['4x6', '8x10', '11x14', '16x20', '20x30'])

    const options = ref([{ label: '0' }])
    for (let i = 1; i <= 10; i++) {
      options.value.push({ label: i })
    }

    return { location, options, selected, sizes }
  },
}
</script>

<style scoped>
.box {
  margin-bottom: 50px;
}
.image {
  position: relative;
  height: 450px;
  width: 100%;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
}
img {
  position: absolute;
  max-width: 100%;
  max-height: 100%;
}
</style>
