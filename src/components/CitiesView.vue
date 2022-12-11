<!-- eslint-disable no-return-assign -->
<template>
    <DataView :value="cars" :layout="layout" :sortOrder="sortOrder" :sortField="sortField">
        <template #header>
            <div class="grid grid-nogutter">
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
            <div>
                Vin: <b>{{ slotProps.data.vin }}</b>
            </div>
        </template>
        <template #grid="slotProps">
            <div>
                Vin: <b>{{ slotProps.data.vin }}</b>
            </div>
        </template>
    </DataView>
</template>

<script>
import ProductService from '../core/ProductService'
// import CityCard from './CityCard.vue'

export default {
    name: 'CitiesView',
    components: {},
    data() {
        return {
            cars: null,
            layout: 'list',
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
        this.productService = new ProductService()
    },
    mounted() {
        // eslint-disable-next-line no-return-assign
        this.productService.getProducts().then(({ data }) => {
            this.cars = data
            console.log(this.products)
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

<style lang="scss" scoped>
.card {
    background: #ffffff;
    padding: 2rem;
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    margin-bottom: 2rem;
}
.p-dropdown {
    width: 14rem;
    font-weight: normal;
}

.product-name {
    font-size: 1.5rem;
    font-weight: 700;
}

.product-description {
    margin: 0 0 1rem 0;
}

.product-category-icon {
    vertical-align: middle;
    margin-right: 0.5rem;
}

.product-category {
    font-weight: 600;
    vertical-align: middle;
}

::v-deep(.product-list-item) {
    display: flex;
    align-items: center;
    padding: 1rem;
    width: 100%;

    img {
        width: 50px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        margin-right: 2rem;
    }

    .product-list-detail {
        flex: 1 1 0;
    }

    .p-rating {
        margin: 0 0 0.5rem 0;
    }

    .product-price {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        align-self: flex-end;
    }

    .product-list-action {
        display: flex;
        flex-direction: column;
    }

    .p-button {
        margin-bottom: 0.5rem;
    }
}

::v-deep(.product-grid-item) {
    margin: 0.5rem;
    border: 1px solid var(--surface-border);

    .product-grid-item-top,
    .product-grid-item-bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    img {
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        margin: 2rem 0;
    }

    .product-grid-item-content {
        text-align: center;
    }

    .product-price {
        font-size: 1.5rem;
        font-weight: 600;
    }
}

@media screen and (max-width: 576px) {
    .product-list-item {
        flex-direction: column;
        align-items: center;

        img {
            margin: 2rem 0;
        }

        .product-list-detail {
            text-align: center;
        }

        .product-price {
            align-self: center;
        }

        .product-list-action {
            display: flex;
            flex-direction: column;
        }

        .product-list-action {
            margin-top: 2rem;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }
    }
}
</style>
