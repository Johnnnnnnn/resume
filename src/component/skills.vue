<template>
    <div style="text-align:left">
        <h1>Skills</h1>
        <div v-for="(skill) in skills" style="margin:8px">
            <div>{{skill.name}}</div>
            <div :style="{
                    height: '20px', 
                    background:'steelBlue', 
                    width:skill.score + 'px' }"></div>
        </div>
    </div>
</template>

<script>
import resume from '../data/resume'

export default {
    data : () => resume
}

</script>

<style>

</style>
