<template>
  <div class="counter" @click="showDrawer = true">
    Show Count
    <w-drawer v-model="showDrawer" bottom height="50px">
      <w-button
        class="button--close"
        @click="showDrawer = false"
        sm
        outline
        round
        absolute
        color="primary"
        icon="wi-cross"
      />
      <div class="counter-text">
        <div class="info-count" v-for="(value, key) in totalCount" :key="key">
          <strong>{{ key }}: </strong>{{ value }}
        </div>
      </div>
    </w-drawer>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
  name: 'CounterDisplay',
  props: {
    overallCount: Object,
  },
  setup(props) {
    const totalCount = reactive(props.overallCount)
    const showDrawer = ref(false)
    return { totalCount, showDrawer }
  },
}
</script>

<style scoped>
.counter {
  position: fixed;
  height: 75px;
  width: 75px;
  background: #4fc7ec;
  border-radius: 100%;
  bottom: 20px;
  right: 20px;
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h1 {
  color: black;
}

.counter-text {
  width: 100%;
  font-size: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.counter-text div + div {
  margin-left: 3%;
}

.info-count {
  display: inline;
}

@media (max-width: 800px) {
  .counter-text {
    font-size: 20px;
  }
}

@media (max-width: 600px) {
  .counter-text {
    font-size: 15px;
  }
}
</style>
