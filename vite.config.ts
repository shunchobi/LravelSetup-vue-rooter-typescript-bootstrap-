import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/scss/app.scss", "resources/js/app.ts"],
            refresh: true,
        }),
        vue(),
    ],
    server: {
        hmr: {
            host: "localhost",
        },
    },
    resolve: {
        alias: {
            "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
        }
    },
});