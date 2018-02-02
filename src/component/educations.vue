<template>
    <div style="width: 50%; text-align:left">
        <div v-for="(education) in educations" style="margin:8px">
            
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
