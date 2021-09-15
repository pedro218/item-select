<template>
  <div>
    <nav class="nav">
      <div class="logo">
        <h1>Item Select</h1>
      </div>
      <div class="links">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <a href="#" @click="logout">Logout</a>
      </div>
    </nav>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'Navbar',
  setup() {
    const store = useStore()
    const router = useRouter()
    
    const logout = () => {
      store.dispatch('logout')
      router.push('/login')
    }

    return { logout }
  }
}
</script>

<style scoped>
.nav {
  background: #1b1b1b;
  display: flex;
  height: 55px;
  justify-content: space-between;
  align-items: center;
}

.logo {
  margin-left: 1rem;
  font-size: 1.1rem;
  color: #4fc8ec;
}
.links {
  margin-right: 1rem;
}
.nav a {
  font-weight: bold;
  color: #4fc8ec;
}

.nav a.router-link-exact-active {
  color: #bde1ec;
}
</style>
