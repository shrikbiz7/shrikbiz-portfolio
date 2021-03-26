<template>
    <div align="center">
        <h1
            :style="{
                width: '100%',
                fontFamily: 'Montserrat, sans-serif',
                overflowX: 'hidden',
                opacity: changeOpacity,
                backgroundImage: `linear-gradient(#${colorChange}, rgb(${primaryColorEffect[0]},${primaryColorEffect[1]},${primaryColorEffect[2]}))`,
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

    get effectStart(): number {
        return this.effectEnd - (this.difference ? this.difference : 500);
    }

    get changeOpacity(): number {
        return this.fraction(this.effectStart + 300, this.effectEnd);
    }

    fraction(start: number, end: number): number {
        let numerator: number =
            this.scrollVariable >= start ? (this.scrollVariable < end ? this.scrollVariable - start : end - start) : 0;
        let denominator: number = end - start;
        return numerator / denominator;
    }

    get colorChange() {
        let number = Math.floor(this.fraction(this.effectStart + 350, this.effectEnd) * 256);
        number = number < 255 ? number : 255;
        let oneth = this.numberToHex(Math.floor(number / 16))?.toString();
        let zeroth = this.numberToHex(number % 16)?.toString();
        let hexValue = oneth?.concat(zeroth) + oneth?.concat(zeroth) + oneth?.concat(zeroth);
        return hexValue;
    }

    get primaryColorEffect(): number[] {
        let firstLimit: number = this.primaryColorHex[0];
        let secondLimit: number = this.primaryColorHex[1];
        let thirdLimit: number = this.primaryColorHex[2];
        let fraction = this.fraction(this.effectStart + 500, this.effectEnd + 150);
        return [
            Math.floor(firstLimit * fraction),
            Math.floor(secondLimit * fraction),
            Math.floor(thirdLimit * fraction),
        ];
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
