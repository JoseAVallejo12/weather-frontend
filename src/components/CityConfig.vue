<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
    <div class="flex flex-column mb-4 custom-config--background">
        <div class="flex flex-column md:flex-row lg:flex-row justify-content-center gap-3 mt-4">
            <div class="flex-grow-1">
                <span class="p-float-label p-input-icon-right sizes">
                    <i class="pi pi-search" />
                    <InputText
                        id="username"
                        type="text"
                        v-model="searchText"
                        @keypress.enter="onSearch"
                        autocomplete="off"
                    />
                    <label for="username">Search you city</label>
                </span>
            </div>
            <div
                class="flex-grow-1 flex flex-column md:flex-row md:flex-row justify-content-end align-items-center gap-3 mr-3"
            >
                <Button @click="openConfirmModal" label="Delete all cards" class="p-button-danger" icon="pi pi-trash" />
                <Button
                    @click="openInfoModal"
                    label="Info"
                    class="p-button-raised p-button-info p-button-text"
                    icon="pi pi-info-circle"
                />
            </div>
        </div>
        <ConfirmDialog id="confirm"></ConfirmDialog>
        <Toast />
    </div>
</template>

<script>
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import ConfirmDialog from 'primevue/confirmdialog'
import Toast from 'primevue/toast'
import events from '../core/store'

export default {
    name: 'CityConfig',
    components: {
        Button,
        InputText,
        ConfirmDialog,
        Toast,
    },
    data() {
        return {
            cities: [],
            searchText: '',
        }
    },
    mounted() {
        events.socket.on('error', () => {
            this.$toast.add({
                severity: 'error',
                summary: 'Error',
                detail: 'City not found',
                life: 3000,
            })
        })
    },
    methods: {
        onSearch() {
            events.socket.emit('search', this.searchText)
            this.searchText = ''
        },
        removeAllCities() {
            console.log('removeAllCities')
            events.socket.emit('removeAllCities')
        },
        getOtherCities() {
            console.log('getOhterCities')
        },
        openConfirmModal() {
            console.log('🚀 ~ openConfirmModal ~ openConfirmModal')
            this.$confirm.require({
                message: 'Are you sure, delete all cities?',
                header: 'Delete all cities',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.removeAllCities()
                },
                reject: () => {
                    this.$confirm.close()
                },
            })
        },
        openInfoModal() {
            this.$confirm.require({
                message:
                    'This is a simple weather app, you can add your city and see the weather forecast for the next 5 days.',
                header: 'Info',
                icon: 'pi pi-info-circle',
                accept: () => {
                    this.$confirm.close()
                },
            })
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

.custom-config--background {
    // background-color: #a29999;
    padding-top: 5rem;
    padding-bottom: 5rem;
    background-image: url('../assets/undraw_weather_re_qsmd.svg');
    background-position: 30px 40px;
    background-repeat: no-repeat;
}
</style>
