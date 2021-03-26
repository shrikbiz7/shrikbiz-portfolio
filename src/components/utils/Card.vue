<template>
    <v-card width="500" class="work-card" :style="{ left: cardSlideEffect + '%', right: 'auto', overflowX: 'hidden' }">
        <v-card-title class="mt-8">
            <strong class="ml-8" style="font-size: 2em">
                {{ jobDetails.companyName }}
            </strong>
            <v-img
                max-width="100px"
                :src="jobDetails.logoLink"
                :style="{
                    position: 'absolute',
                    left: 'auto',
                    right: '10px',
                    top: '50px',
                }"
            >
            </v-img>
        </v-card-title>
        <v-card-title>
            <strong class="ml-8" style="color: grey">
                {{ jobDetails.jobTitle }}
            </strong>
        </v-card-title>

        <v-card-text>
            <div class="font-weight-bold ml-8 mb-2" align="left">
                {{ jobDetails.description }}
            </div>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Card extends Vue {
    @Prop() isDirectionLeft!: any;
    @Prop() effectEnd!: any;
    @Prop() difference!: any;
    @Prop() scrollVariable!: any;
    @Prop() jobDetails!: any;
    // @Prop() jobTitle!: any;
    // @Prop() companyName!: any;
    // @Prop() description!: any;
    // @Prop() logoLink!: any;

    get effectStart(): number {
        return this.effectEnd - (this.difference ? this.difference : 500);
    }
    get cardSlideEffect(): number {
        let fraction = this.fraction(this.effectStart, this.effectEnd);
        return this.isDirectionLeft ? fraction * 100 - 80 : 80 - fraction * 100;
    }

    fraction(start: number, end: number): number {
        let numerator: number =
            this.scrollVariable >= start ? (this.scrollVariable < end ? this.scrollVariable - start : end - start) : 0;
        let denominator: number = end - start;
        return numerator / denominator;
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
</style>
