<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
    <div class="config-container">
        <h1>City Config</h1>
        <div class="config-container--controls">
            <div class="config-container--controls__input">
                <span class="p-float-label p-input-icon-right">
                    <i class="pi pi-search" />
                    <InputText id="username" type="text" />
                    <label for="username">Username</label>
                </span>
            </div>
            <div class="config-container--controls__list">
                <button>my cities</button>
            </div>
            <div class="config-container--controls__other">
                <Button>other cities</Button>
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
}
</script>

<style></style>
