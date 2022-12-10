<template>
    <!-- <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </nav>
    <router-view /> -->
    <div class="weather-container">
        <CityConfig />
        <CitiesView />
    </div>
</template>

<script>
import events from '../core/store'
import CityConfig from '../components/CityConfig.vue'
import CitiesView from '../components/CitiesView.vue'

export default {
    app: 'APP View weather',
    components: {
        CityConfig,
        CitiesView,
    },
    mounted() {
        events.socket.on('connect', () => {
            console.log('connected to socket')
        })
        console.log(`the component is now mounted.`)
    },
}
</script>

<style>
.weather-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    width: 100vw;
    background-color: #f5f5f5;
}
</style>
