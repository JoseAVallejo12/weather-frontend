<template>
    <div class="home">
        <WeatherViewVue></WeatherViewVue>
    </div>
</template>

<script>
// @ is an alias to /src
import WeatherViewVue from './weatherView.vue'

export default {
    name: 'HomeView',
    components: {
        WeatherViewVue,
    },
}
</script>
