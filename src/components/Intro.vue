<template>
    <div style="position: static" justify="center" align="center">
        <v-img
            gradient="to top right, rgba(100,115,201,.1), rgba(25,32,72,.3)"
            src="@/assets/myPhoto.jpg"
            max-width="300px"
            class="mb-8"
            style="border-radius: 50px;"
        >
        </v-img>
        <v-lazy
            v-model="isActive"
            :options="{
                threshold: 0.2,
            }"
            height="auto"
            transition="fade-transition"
        >
            <div>
                <div class="typewriter" justify="left" align="left">
                    <h1>Hi there, I'm Shrikant.</h1>
                    <p id="line-1">
                        I am a FrontEnd Software Developer form Denver, Colorado with ~3 years of experience.
                    </p>
                    <p id="line-2">
                        Even though I have worked with all three major-player of web development - Angular, React, and
                        Vue,
                    </p>
                    <p id="line-3">
                        I majorly work with React and Vue. I like working with Javascript.
                    </p>
                    <p id="line-4">
                        Recently I started Instagram page to share my knowledge about Javascript with other upcoming web
                        developer.
                    </p>
                    <p id="line-5">
                        When I am not programming, I like to cook, bike and/or hike, gym or play with Data Struture &
                        Algorithms.
                    </p>
                </div>
            </div>
        </v-lazy>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Intro extends Vue {
    isActive: boolean = false;
    line1: string = `I am a FrontEnd Software Developer form Denver, Colorado with ~3 years of experience.`;
    line2: string = `Even though I have worked with all three major-player of web development - Angular, React, and
                        Vue,`;
    line3: string = `I majorly work with React and Vue. I like working with Javascript.`;
    line4: string = `Recently I started Instagram page to share my knowledge about Javascript with other upcoming web
                        developer.`;
    line5: string = `When I am not programming, I like to cook, bike and/or hike, gym or play with Data Struture &
                        Algorithms.`;

    created() {
        console.log(
            `line1: ${this.line1.length}, line2: ${this.line2.length}, line3: ${this.line3.length}, line4: ${this.line4.length}, line5: ${this.line5.length}`
        );
    }
}
</script>

<style scoped lang="scss">
body {
    color: #fffa6b;
    font-family: 'Fira Code', monospace;
}

.typewriter {
    position: relative;
    top: 35%;
    left: 20rem;
}

.typewriter h1 {
    color: #fffa6b;
    border-right: 10px solid rgba(167, 255, 15, 0.907);
    white-space: nowrap;
    overflow: hidden;
    width: 410px;
    white-space: nowrap;
    overflow: hidden;
    animation: typewriter 2s steps(30) 1s 1 normal both;
    padding-bottom: 2rem;
}

.typewriter #line-1 {
    color: #ff8269;
    border-right: 10px solid rgba(167, 255, 15, 0.907);
    white-space: nowrap;
    overflow: hidden;
    width: 950px;
    white-space: nowrap;
    overflow: hidden;
    animation: typewriter 4s steps(50) 1s 1 normal both;
    animation-delay: 3.5s;
    font-size: 1.5rem;
}
.typewriter #line-2 {
    color: #ff8269;
    border-right: 10px solid rgba(167, 255, 15, 0.907);
    white-space: nowrap;
    overflow: hidden;
    width: 1080px;
    white-space: nowrap;
    overflow: hidden;
    animation: typewriter 4s steps(50) 1s 1 normal both;
    animation-delay: 3.5s;
    font-size: 1.5rem;
}
.typewriter #line-3 {
    color: #ff8269;
    border-right: 10px solid rgba(167, 255, 15, 0.907);
    white-space: nowrap;
    overflow: hidden;
    width: 685px;
    white-space: nowrap;
    overflow: hidden;
    animation: typewriter 4s steps(50) 1s 1 normal both;
    animation-delay: 3.5s;
    font-size: 1.5rem;
}
.typewriter #line-4 {
    color: #ff8269;
    border-right: 10px solid rgba(167, 255, 15, 0.907);
    white-space: nowrap;
    overflow: hidden;
    width: 1185px;
    white-space: nowrap;
    overflow: hidden;
    animation: typewriter 4s steps(50) 1s 1 normal both;
    animation-delay: 3.5s;
    font-size: 1.5rem;
}
.typewriter #line-5 {
    color: #ff8269;
    border-right: 10px solid rgba(167, 255, 15, 0.907);
    white-space: nowrap;
    overflow: hidden;
    width: 1120px;
    white-space: nowrap;
    overflow: hidden;
    animation: typewriter 4s steps(50) 1s 1 normal both;
    animation-delay: 3.5s;
    font-size: 1.5rem;
}

@keyframes typewriter {
    0% {
        width: 0;
        border-right: none;
    }
    0.1% {
        border-right: 10px solid rgba(167, 255, 15, 0.907);
    }
    99.9% {
        border-right: 10px solid rgba(167, 255, 15, 0.907);
    }
    100% {
        border: none;
    }
}

i {
    opacity: 0;
    animation: fadeIn 2s ease-in-out;
    animation-delay: 10s;
    animation-fill-mode: forwards;
    padding-top: 1rem;
    padding-left: 20px;
}

// a {
//     color: rgb(220, 220, 220);
// }

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>
