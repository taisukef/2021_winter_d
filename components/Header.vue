<template>
  <v-app-bar
    app
  >
    <a href="/" style="color:white;">
      <v-toolbar-title v-text="title" />
    </a>
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
      title: 'BazUp！！'
    }
  }
}
</script>
