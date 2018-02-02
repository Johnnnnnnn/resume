<template>
    <div id="app">
        <div id="basicInfomation">
            <!-- <div id="name" style="font-size:1.5em">{{firstName}} {{lastName}}</div>
            <div id="birthday">{{birthday.year}}/{{birthday.month}}/{{birthday.day}}</div>
            <div id="cellphone">{{cellPhone}}</div>
            <div id="email">{{email}}</div> -->
        </div>
        <hr color="#666666"/>
        <div>123</div>
        <skills></skills>

    </div>
</template>

<script>
import resume from './data/resume'
import arrow from './component/d3/baseArrow.vue'
import skills from './component/skills'
import educations from './component/educations'
export default {
    data : () => resume,
    mounted (){
        
    },
    components: {
        arrow,
        educations,
        skills
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
#basicInfomation div{
    text-align: left;
    font-size: 1.2em
}
</style>
