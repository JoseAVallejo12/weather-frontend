<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
    <div class="flex flex-column">
        <h1 class="mt-4">City Config</h1>
        <div class="flex flex-column md:flex-row lg:flex-row justify-content-center gap-3 mt-4">
            <div class="flex-grow-1">
                <span class="p-float-label p-input-icon-right sizes">
                    <i class="pi pi-search" />
                    <InputText id="username" type="text" v-model="searchText" @keypress.enter="onSearch" />
                    <label for="username">Search you city</label>
                </span>
            </div>
            <div class="flex-grow-1">
                <Button @click="getMyCities">cities</Button>
            </div>
            <div class="flex-grow-1">
                <Button @click="getOtherCities">other</Button>
            </div>
        </div>
    </div>
</template>

<script>
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

export default {
    name: 'CityConfig',
    components: {
        Button,
        InputText,
    },
    data() {
        return {
            cities: [],
            searchText: '',
        }
    },
    methods: {
        onSearch() {
            console.log('search', this.searchText)
            this.searchText = ''
        },
        getMyCities() {
            console.log('getMyCities')
        },
        getOtherCities() {
            console.log('getOhterCities')
        },
    },
}
</script>

<style lang="scss" scoped>
.sizes {
    .p-inputtext {
        width: 350px;

        &:last-child {
            margin-bottom: 0;
        }
    }
}

.field * {
    display: block;
}
</style>
