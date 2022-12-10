<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <WeatherViewVue></WeatherViewVue>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import WeatherViewVue from "./weatherView.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    WeatherViewVue,
  },
};
</script>
