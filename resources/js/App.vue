<template>
    <div>
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/foo">Foo</router-link>
            </li>
            <li>
                <router-link to="/bar">Bar</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script lang="ts" setup>
</script>
