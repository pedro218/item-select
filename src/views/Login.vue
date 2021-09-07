<template>
  <div>
    <div class="login-container">
      <w-form @submit.prevent="login" v-model="valid">
        <p
          v-if="error.length"
          class="error"
          :class="error.length ? 'shake' : ''"
        >
          {{ error }}
        </p>
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
            Login
          </w-button>
          <w-menu show-on-hover>
            <template #activator="{ on }">
              <p v-on="on">Forgot Password?</p>
            </template>
            <p>Contact _____ for assistance</p>
            <h4>Sample Logins</h4>
            <h4>username: password</h4>
            <p>John Doe: qwerty</p>
            <p>Jane Doe: asdfgh</p>
            <p>Spider-Man: red-blue</p>
            <p>Kratos: revenge</p>
          </w-menu>
        </div>
      </w-form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'Login',
  setup() {
    const store = useStore()
    const router = useRouter()

    const valid = ref(null)
    const username = ref('')
    const password = ref('')
    
    const validators = {
      required: (value) => !!value || 'This field is required',
    }
    const error = ref('')

    const login = async () => {
      error.value = ''
      if (username.value && password.value) {
        const login = await store.dispatch('login', {
          username: username.value.toLowerCase(),
          password: password.value,
        })
        if (login) {
          router.push('/')
        } else {
          error.value = 'Incorrect username or password'
        }
      }
    }

    return { valid, username, password, validators, login, error }
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
.error {
  color: red;
}

.shake {
  animation: shake 0.2s;
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-25px);
  }
  50% {
    transform: translateX(25px);
  }
  75% {
    transform: translateX(-25px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
