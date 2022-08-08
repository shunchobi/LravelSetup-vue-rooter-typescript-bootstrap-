<template>
    <div>
        <h1>
            this is foo view
        </h1>
    </div>
    Foo: pinia store is {{ counterStore.count }}

</template>

<script lang="ts" setup>
import { useCounterStore } from '../stores/counter'

const counterStore = useCounterStore()


</script>