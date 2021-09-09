<template>
  <w-card class="box">
    <div class="image">
      <img :src="location" alt="image" />
    </div>
    <div>
      <w-flex wrap>
        <div class="xs12 md6 lg4" v-for="size in sizes" :key="size">
          <label>{{ size }}</label>
          <br />
          <select
            class="select"
            name="sizes"
            v-model="selected[size]"
            @change="() => updatedSelection(size)"
          >
            <option
              v-for="option in options"
              :key="option.label"
              :value="option.label"
            >
              {{ option.label }}
            </option>
          </select>
        </div>
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
  setup(props, ctx) {
    const path = ref(props.path)
    const number = ref(props.number)
    const location = `${path.value}${number.value}.jpg`

    const selected = reactive({
      '4x6': 0,
      '8x10': 0,
      '11x14': 0,
      '16x20': 0,
      '20x30': 0,
    })

    const prevSelected = {
      '4x6': 0,
      '8x10': 0,
      '11x14': 0,
      '16x20': 0,
      '20x30': 0,
    }

    const sizes = ref(['4x6', '8x10', '11x14', '16x20', '20x30'])

    const options = ref([{ label: '0' }])
    for (let i = 1; i <= 10; i++) {
      options.value.push({ label: i })
    }

    function updatedSelection(size) {
      const updatedValue = selected[size] - prevSelected[size]
      ctx.emit('update-count', { size, updatedValue })
      prevSelected[size] = selected[size]
    }

    return { location, options, selected, sizes, updatedSelection }
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
  align-items: center;
}

img {
  position: absolute;
  max-width: 100%;
  max-height: 100%;
}

select {
  background: transparent;
  height: 30px;
  width: 90%;
  margin-bottom: 5px;
  border: 1px solid rgba(100, 100, 100, 0.5);
  border-radius: 5px;
  cursor: pointer;
}
</style>
