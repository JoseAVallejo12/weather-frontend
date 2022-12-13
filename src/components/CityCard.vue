<template>
    <Card>
        <template #title>
            <div class="title-info">
                <span class="p-text-bold">Weather Info</span>
                <a aria-label="close" @click="close" @keypress.enter="close"><i class="pi pi-times"></i></a>
            </div>
        </template>
        <template #content>
            <div class="p-grid">
                <div class="p-col-12 flex flex-row justify-content-between">
                    <span class="p-text-bold">Country:</span>
                    <span>{{ city.data.name }}</span>
                </div>
                <div class="p-col-12 flex flex-row justify-content-between">
                    <span class="p-text-bold">Temp:</span>
                    <span>{{ city.data.temp }} C</span>
                </div>
                <div class="p-col-12 flex flex-row justify-content-between">
                    <span class="p-text-bold">Temp Max:</span>
                    <span>{{ city.data.max_temp }} C</span>
                </div>
                <div class="p-col-12 flex flex-row justify-content-between">
                    <span class="p-text-bold">Temp Min:</span>
                    <span>{{ city.data.min_temp }} C</span>
                </div>
                <div class="p-col-12 flex flex-row justify-content-between">
                    <span class="p-text-bold">Humidity:</span>
                    <span>{{ city.data.humidity }}</span>
                </div>
                <div class="p-col-12 flex flex-row justify-content-between">
                    <span class="p-text-bold">Humidity:</span>
                    <span>{{ city.data.humidity }}</span>
                </div>
                <div class="p-col-12 flex flex-row justify-content-between">
                    <span class="p-text-bold">Wind Speed 🌬:</span>
                    <span>{{ city.data.wind_speed }} km/h</span>
                </div>
            </div>
        </template>
    </Card>
</template>

<script>
import Card from 'primevue/card'
import events from '../core/store'

export default {
    name: 'CityCard',
    components: {
        Card,
    },
    mounted() {
        // console.log('CityCard mounted', this.city)
    },
    props: {
        city: {
            type: Object,
            required: true,
        },
    },
    methods: {
        close() {
            console.log('close', this.city.data.name)
            events.socket.emit('removeCity', this.city.data.name)
        },
    },
}
</script>

<style lang="scss">
.p-card {
    margin: 6px;
    height: auto;
}
.title-info {
    position: relative;
}
.p-card-title > div > a > i {
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    transition: transform 0.5s ease-in-out;
}
.p-card-title > div > a > i:hover {
    transform: rotate(180deg);
    transition: transform 0.5s ease-in-out;
    text-shadow: 1px 1px 1px rgba(150, 150, 150, 1);
}
</style>
