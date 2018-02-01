<template>
    <div id="app">
       {{firstName}}
    </div>
</template>

<script>
import resume from './data/resume'

export default {
    data : () => resume,
    components: {
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
