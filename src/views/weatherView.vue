<template>
    <div class="flex flex-column">
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

<style></style>
