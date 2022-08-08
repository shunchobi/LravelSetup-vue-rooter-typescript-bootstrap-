<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        @vite(['resources/scss/app.scss', 'resources/js/app.ts'])
    </head>
    <body>
        <h1 class="text-danger">
            Laravel Vue VueRouter TypeScript Bootstrap
        </h1>
        <div id="app"></div>
    </body>
</html>