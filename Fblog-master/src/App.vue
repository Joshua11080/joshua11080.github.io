<template>
  <Home v-if="!isAdmins" />
  <AdminIndex v-else-if="isAdmins" />
</template>

<script>
import Home from './views/home'
import AdminIndex from './views/adminIndex'
export default {
  components: { Home, AdminIndex },
  data() {
    return {
      routPath: window.location.href,
      isAdmins: false
    }
  },
  created() {
    this.isAdmins = this.isAdmin()
  },
  methods: {
    isAdmin() {
      console.log(this.routPath)
      return this.routPath.indexOf('/admin') !== -1
    }
  }
}
</script>
