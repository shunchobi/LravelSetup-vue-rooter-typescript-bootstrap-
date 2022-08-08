<template>
    <div>
        <h1>
            this is home view
        </h1>
    </div>
    Home: pinia store is {{ counterStore.count }}

</template>

<script lang="ts" setup>
import { useCounterStore } from '../stores/counter'

const counterStore = useCounterStore()


</script>