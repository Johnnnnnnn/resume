<template>
    <div id="app">
        <div id="basicInfomation">
            <!-- <div id="name" style="font-size:1.5em">{{firstName}} {{lastName}}</div>
            <div id="birthday">{{birthday.year}}/{{birthday.month}}/{{birthday.day}}</div>
            <div id="cellphone">{{cellPhone}}</div>
            <div id="email">{{email}}</div> -->
        </div>
        <hr color="#666666"/>
        <div id="left">
            <educations></educations>
            <experiences></experiences>    
        </div>
        <div id="right">
            <skills></skills>
        </div>
    </div>
</template>

<script>
import resume from './data/resume'
import arrow from './component/d3/baseArrow.vue'
import skills from './component/skills'
import educations from './component/educations'
import experiences from './component/experiences'
export default {
    data : () => resume,
    components: {
        arrow,
        educations,
        experiences,
        skills
    }
}



</script>

<style>
/*global css*/
.css-table{
    display: table;
}
.css-table .thead{
    display:table-header-group;
}
.css-table .tbody{
    display:table-row-group;
}
.css-table .tr{
    display:table-row;
}
.css-table .th, .css-table .td{
    display:table-cell;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

    /*for A4 size*/
    width : 63em;
    height: 90em;
}
#basicInfomation div{
    text-align: left;
    font-size: 1.2em
}
#left {
    width: 48%;
    display: inline-block;
}
#right {
    width: 48%;
    display: inline-block;
}
</style>
