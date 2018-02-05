<template>
    <div class="css-table" style="width: 50%; text-align:left;;margin: 0.5em;">
        <div class="tbody" v-for="(experience) in experiences" style="margin:8px">
        	<div class="tr">
        		<div class="td">{{experience.company}}</div>
        		<div class="td">{{experience.startTime.month}}/{{experience.startTime.year}}~{{experience.endTime.month}}/{{experience.endTime.year}}</div>	
        	</div>            
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
