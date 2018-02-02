<template>
    <div id="arrow"></div>
</template>

<script>
export default {
    mounted (){

        let height = 150
        let width = 150
        let marginPercentage = 20/100
        let marginX = width * marginPercentage
        let marginY = height * marginPercentage
        let centerX = height / 2
        let centerY = height / 2
        let color = "SteelBlue"

        let canvas = d3.select(this.$el)
        .append("svg")
        .attr("width", width)
        .attr("height", height);

        let line1 = canvas.append("line")
        .attr("x1", centerX)
        .attr("y1", 0 + marginY)
        .attr("x2", centerX)
        .attr("y2", height- marginY)
        .attr("stroke", color)
        .attr("stroke-linejoin", "round")
        .attr("stroke-width", 10);

        let triangle = canvas.append("polygon")
        .attr("points", `${centerX},${0 + marginY} ${width - marginX},${centerY} ${0 + marginX},${centerY}`)
        .attr("stroke", color)
        .attr("stroke-linejoin", "round")
        .attr("fill", color)
        .attr("stroke-width", 10);
    },
    components: {
    }
}



</script>

<style>
</style>
