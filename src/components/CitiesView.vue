<!-- eslint-disable no-return-assign -->
<template>
    <div class="custom">
        <DataView :value="cities" :layout="layout" :sortOrder="sortOrder" :sortField="sortField">
            <template #header>
                <div class="grid grid-nogutter justify-content-center">
                    <div class="col-6" style="text-align: left">
                        <Dropdown
                            v-model="sortKey"
                            :options="sortOptions"
                            optionLabel="label"
                            placeholder="Sort By"
                            @change="onSortChange($event)"
                        />
                    </div>
                    <div class="col-6" style="text-align: right">
                        <DataViewLayoutOptions v-model="layout" />
                    </div>
                </div>
            </template>
            <template #list="slotProps">
                <div class="col-12">
                    <CityCard :city="slotProps" />
                </div>
            </template>
            <template #grid="slotProps">
                <div class="col-12 md:col-4 lg:col-3">
                    <CityCard :city="slotProps" />
                </div>
            </template>
        </DataView>
    </div>
</template>

<script>
import DataView from 'primevue/dataview'
import Dropdown from 'primevue/dropdown'
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'
import events from '../core/store'
import ProductService from '../core/ProductService'
import CityCard from './CityCard.vue'

export default {
    name: 'CitiesView',
    components: {
        DataView,
        Dropdown,
        DataViewLayoutOptions,
        CityCard,
    },
    data() {
        return {
            cities: [],
            layout: 'grid',
            sortKey: null,
            sortOrder: null,
            sortField: null,
            sortOptions: [
                { label: 'Newest First', value: '!year' },
                { label: 'Oldest First', value: 'year' },
                { label: 'Brand', value: 'brand' },
            ],
        }
    },
    productService: null,
    created() {
        console.log('created')
        this.productService = new ProductService()
    },
    mounted() {
        events.socket.on('cities', (data) => {
            this.cities = data
            console.log('cities event', data)
        })
        events.socket.on('search', (data) => {
            this.cities.push(data)
            console.log('search event', data)
        })
    },
    methods: {
        onSortChange(event) {
            const { value } = event.value
            const sortValue = event.value

            if (value.indexOf('!') === 0) {
                this.sortOrder = -1
                this.sortField = value.substring(1, value.length)
                this.sortKey = sortValue
            } else {
                this.sortOrder = 1
                this.sortField = value
                this.sortKey = sortValue
            }
        },
    },
}
</script>

<style lang="scss">
.p-dataview-content > div > div > div > div {
    transition: all 0.3s ease-in-out;
    position: relative;
    &:hover {
        box-shadow: 0px 0px 0.3px rgba(0, 0, 0, 0.001), 0px 0px 0.7px rgba(0, 0, 0, 0.002),
            0px 0.2px 1.2px rgba(0, 0, 0, 0.004), 0.1px 0.4px 1.9px rgba(0, 0, 0, 0.01),
            0.1px 0.8px 2.9px rgba(0, 0, 0, 0.022), 0.3px 1.6px 4.5px rgba(0, 0, 0, 0.048),
            0.5px 2.9px 7.5px rgba(0, 0, 0, 0.098), 1px 6px 15px rgba(0, 0, 0, 0.23);
        border-radius: 3px;
    }
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('../assets/undraw_season_change_f99v.svg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 3px;
        opacity: 0.2;
    }
}
</style>
