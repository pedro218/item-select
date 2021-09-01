<template>
  <div>
    <div class="login-container">
      <w-form @submit.prevent="login" v-model="valid">
        <w-input
          label="Username"
          v-model="username"
          :validators="[validators.required]"
        />

        <w-input
          class="mt3"
          type="password"
          label="Password"
          v-model="password"
          :validators="[validators.required]"
        />

        <div class="text-center my6">
          <w-button class="mb2" type="submit" :disabled="valid === false">
            Validate
          </w-button>
          <w-menu show-on-hover>
            <template #activator="{ on }">
              <p v-on="on">Forgot Password?</p>
            </template>
            Contact _____ for assistance
          </w-menu>
        </div>
      </w-form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Login',
  setup() {
    const valid = ref(null)
    const username = ref('')
    const password = ref('')
    const validators = {
      required: (value) => !!value || 'This field is required',
    }

    const login = () => {
      if (username.value && password.value) {
        alert('you are loggin')
      }
    }

    return { valid, username, password, validators, login }
  },
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  width: 100%;
}
form {
  width: 30%;
}
</style>
