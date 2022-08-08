<template>
    <div>
        <h1>
            this is bar view 
        </h1>
    </div>

    Bar: pinia store is {{ counterStore.count }}
</template>


<script lang="ts" setup>
import { useCounterStore } from '../stores/counter'

const counterStore = useCounterStore()


</script>