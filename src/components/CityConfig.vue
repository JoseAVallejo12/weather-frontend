<template>
    <div class="config-container">
        <h1>City Config</h1>
        <div class="config-container--controls">
            <div class="config-container--controls__input">
                <label for="cityName">
                    <input id="cityName" type="text" placeholder="City Name" />
                </label>
                <button>Add City</button>
            </div>
            <div class="config-container--controls__list">
                <button>my cities</button>
            </div>
            <div class="config-container--controls__other">
                <button>other cities</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CityConfig',
    components: {
        // CityConfig,
        // CityCard,
    },
}
</script>

<style></style>
