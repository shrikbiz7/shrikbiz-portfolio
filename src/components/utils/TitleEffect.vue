<template>
    <div align="center">
        <h1
            :style="{
                width: '100%',
                fontFamily: 'Montserrat, sans-serif',
                overflowX: 'hidden',
                opacity: changeOpacity,
                backgroundImage: `linear-gradient(${secondColorEffect} , ${primaryColorEffect})`,
                webkitBackgroundClip: 'text',
                color: 'transparent',
            }"
        >
            {{ title }}
        </h1>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class TitleEffect extends Vue {
    @Prop() scrollVariable!: any;
    @Prop() title!: any;
    @Prop() effectEnd!: any;
    @Prop() difference?: any;
    @Prop() primaryColorHex!: any;
    secondaryColor: number[] = [255, 255, 255];

    get effectStart(): number {
        return this.effectEnd - (this.difference ? this.difference : 500);
    }
    get changeOpacity(): number {
        return this.fraction(this.effectStart + 300, this.effectEnd);
    }
    get primaryColorEffect(): string {
        let rgbArray = this.colorChange(this.primaryColorHex, 500, 150);
        return `rgb(${rgbArray[0]},${rgbArray[1]},${rgbArray[2]})`;
    }
    get secondColorEffect() {
        let rgbArray = this.colorChange(this.secondaryColor);
        return `rgb(${this.secondaryColor[0] - rgbArray[0]},${this.secondaryColor[1] - rgbArray[1]},${this
            .secondaryColor[2] - rgbArray[2]})`;
    }

    updated() {
        console.log(this.primaryColorEffect, this.secondColorEffect);
    }

    colorChange(colorArray: number[], addToStart: number = 0, addToEnd: number = 0): number[] {
        let firstLimit: number = colorArray[0];
        let secondLimit: number = colorArray[1];
        let thirdLimit: number = colorArray[2];
        // let fraction = this.fraction(this.effectStart + 500, this.effectEnd + 150);
        let fraction = this.fraction(this.effectStart + addToStart, this.effectEnd + addToEnd);
        return [
            Math.floor(firstLimit * fraction),
            Math.floor(secondLimit * fraction),
            Math.floor(thirdLimit * fraction),
        ];
        // return `rgb(${rbgArray[0]},${rbgArray[1]},${rbgArray[2]})`;
    }

    fraction(start: number, end: number): number {
        let numerator: number =
            this.scrollVariable >= start ? (this.scrollVariable < end ? this.scrollVariable - start : end - start) : 0;
        let denominator: number = end - start;
        return numerator / denominator;
    }

    //color picker helper
    numberToHex(num: number) {
        let hex: any = new Map([
            [10, 'a'],
            [11, 'b'],
            [12, 'c'],
            [13, 'd'],
            [14, 'e'],
            [15, 'f'],
        ]);
        return hex.has(num) ? hex.get(num) : num;
    }
}
</script>

<style scoped lang="scss">
* {
    font-family: Montserrat, sans-serif;
}
.work-info {
    position: relative;
    height: 150vh;
    background: #121212;
    background: radial-gradient(circle at 100%, rgba(255, 71, 255, 0.527) 5%, #eee 35%, #121212 35%);
}
.work-container {
    position: relative;
    top: 10rem;
}

.work-card:hover {
    box-shadow: 0 0 20px 0 rgba(255, 255, 255, 1) !important;
    background: rgba(22, 22, 22, 0.651);
}

h1 {
    font-size: 5em;
    font-weight: normal;
}
</style>
