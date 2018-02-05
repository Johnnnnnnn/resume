<template>
    <div class="css-table" style="width: 50%; text-align:left; margin: 0.5em;">
    	<div style="font-size: 2em">Education</div>
    	<hr/>
        <div class="tbody" v-for="(education) in educations" style="margin:8px">
        	<div class="tr">
        		<div class="td">{{education.school}}</div>
        		<div class="td">{{education.startTime.month}}/{{education.startTime.year}}~{{education.endTime.month}}/{{education.endTime.year}}</div>	
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
