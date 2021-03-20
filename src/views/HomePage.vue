<template>
    <div
        id="scroll-target"
        style="max-height: calc(100vh - 56.8px); width: 100%; height: auto; overflow-x: hidden"
        class="overflow-y-auto"
    >
        <FirstLook />
        <v-row v-scroll:#scroll-target="onScroll" justify="center" class="secondHead" style="width: 100%">
            <v-col cols="auto" style="width: 100%">
                <div align="center">
                    <h1
                        class="section"
                        :style="{
                            width: '100%',
                            fontFamily: 'Montserrat, sans-serif',
                            overflowX: 'hidden',
                            opacity: changeOpacity,
                            backgroundImage: `linear-gradient(#${colorPicker}, #000)`,
                            webkitBackgroundClip: 'text',
                            color: 'transparent',
                        }"
                    >
                        Work
                    </h1>
                </div>
            </v-col>
        </v-row>
        <v-row
            v-scroll:#scroll-target="onScroll"
            justify="center"
            class="secondHead"
            style="width: 100%; margin-bottom: 50vh"
        >
            <v-col cols="auto" align="center" style="width: 50%">
                <v-card width="400" :style="{ left: cardOneSlideIn + '%', right: 'auto', overflowX: 'hidden' }">
                    <v-img height="200px" src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg">
                        <v-card-title class="white--text mt-8">
                            <v-avatar size="56">
                                <img
                                    alt="user"
                                    src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                                />
                            </v-avatar>
                            <p class="ml-3">
                                card 1
                            </p>
                        </v-card-title>
                    </v-img>

                    <v-card-text>
                        <div class="font-weight-bold ml-8 mb-2">
                            Card 1 Items
                        </div>

                        <v-timeline align-top dense>
                            <v-timeline-item
                                v-for="(message, index) in ['work with javascript', 'worked with typescript']"
                                :key="index"
                                small
                            >
                                <div>
                                    <div class="font-weight-normal">
                                        <strong>{{ index }}: </strong>
                                        <span> {{ message }}</span>
                                    </div>
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="auto" style="width: 50%">
                <div style="position: relative; top: 20rem" align="center">
                    <v-card width="400" :style="{ left: cardTwoSlideIn + '%', right: 'auto', overflowX: 'hidden' }">
                        <v-img height="200px" src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg">
                            <v-card-title class="white--text mt-8">
                                <v-avatar size="56">
                                    <img
                                        alt="user"
                                        src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                                    />
                                </v-avatar>
                                <p class="ml-3">
                                    card 2
                                </p>
                            </v-card-title>
                        </v-img>

                        <v-card-text>
                            <div class="font-weight-bold ml-8 mb-2">
                                Card 2 Items
                            </div>

                            <v-timeline align-top dense>
                                <v-timeline-item
                                    v-for="(message, index) in ['work with javascript', 'worked with typescript']"
                                    :key="index"
                                    small
                                >
                                    <div>
                                        <div class="font-weight-normal">
                                            <strong>{{ index }}: </strong>
                                            <span> {{ message }}</span>
                                        </div>
                                    </div>
                                </v-timeline-item>
                            </v-timeline>
                        </v-card-text>
                    </v-card>
                </div>
            </v-col>
        </v-row>
        <!-- <v-row
            v-scroll:#scroll-target="onScroll"
            justify="center"
            class="secondHead"
            style="width: 100%; margin-bottom: 50vh"
        >
            <v-col cols="auto" style="width: 100%">
                <div align="center">
                    <v-card width="400" :style="{ left: cardTwoSlideIn + '%', right: 'auto', overflowX: 'hidden' }">
                        <v-img height="200px" src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg">
                            <v-card-title class="white--text mt-8">
                                <v-avatar size="56">
                                    <img
                                        alt="user"
                                        src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                                    />
                                </v-avatar>
                                <p class="ml-3">
                                    card 2
                                </p>
                            </v-card-title>
                        </v-img>

                        <v-card-text>
                            <div class="font-weight-bold ml-8 mb-2">
                                Card 2 Items
                            </div>

                            <v-timeline align-top dense>
                                <v-timeline-item
                                    v-for="(message, index) in ['work with javascript', 'worked with typescript']"
                                    :key="index"
                                    small
                                >
                                    <div>
                                        <div class="font-weight-normal">
                                            <strong>{{ index }}: </strong>
                                            <span> {{ message }}</span>
                                        </div>
                                    </div>
                                </v-timeline-item>
                            </v-timeline>
                        </v-card-text>
                    </v-card>
                </div>
            </v-col>
        </v-row> -->

        <!-- the slide in and roller one -->
        <!-- <v-row v-scroll:#scroll-target="onScroll" justify="center" class="secondHead primary">
            <v-col cols="auto">
                <div align="center" style="margin-top: 10rem">
                    <v-lazy
                        v-model="isActive"
                        :options="{
                            threshold: 0.1,
                        }"
                        min-height="200"
                        transition="fade-transition"
                    >
                        <h1
                            :style="{
                                width: '100%',
                                fontFamily: 'Helvetica',
                                marginLeft: titleSpeed + 'px',
                                overflowX: 'hidden',
                            }"
                        >
                            <Roller
                                :wordWrap="10"
                                :charList="charList"
                                defaultChar=" "
                                :transition="1"
                                text="Shrikant P"
                            ></Roller>
                        </h1>
                    </v-lazy>
                    <h4
                        align="center"
                        :style="{
                            width: '100%',
                            marginLeft: titleSpeed + 'px',
                            overflowX: 'none',
                        }"
                    >
                        FrontEnd Software Engineer
                    </h4>
                </div>
            </v-col>
        </v-row> -->
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Emit, Watch, Prop } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import store from '@/store/store';
import { Characters } from '@/constants/char';

@Component({
    components: {
        Roller: () => import('vue-roller'),
        FirstLook: () => import('@/components/FirstLook.vue'),
    },
})
export default class HomePage extends Vue {
    @Prop() handleScrollVariable: any;
    storeModule: any;
    isActive: boolean = false;
    scrollVariable: number = 0;

    @Emit('handleScrollVariable')
    handleScroll(variable: any) {}

    async created() {
        if (!this.storeModule) this.storeModule = getModule(store, this.$store);
    }

    get titleSpeed(): number {
        let constant: number = 862;
        let number = constant - this.scrollVariable;
        return number > 0 ? number : 0;
    }
    get subTitleSpeed(): number {
        let constant: number = 862;
        return this.scrollVariable > constant ? Math.pow(this.scrollVariable - constant, 1.2) : 0;
    }

    get charList(): string[] {
        let capsCharList = Characters.map(char => (char = char?.toUpperCase()));
        let specialChar = ['.', '-'];
        let charList: string[] = [];
        charList.push(...Characters, ...capsCharList, ...specialChar, ' ');
        return charList;
    }

    get changeOpacity(): number {
        let upperBound = 200;
        let lowerBound = 700;
        let fraction =
            this.scrollVariable > upperBound
                ? this.scrollVariable < lowerBound
                    ? (this.scrollVariable - upperBound) / (lowerBound - upperBound)
                    : 1
                : 0;
        return fraction;
    }

    get cardOneSlideIn(): number {
        let lowerBound = 750;
        let upperBound = lowerBound - 450;
        let fraction =
            this.scrollVariable > upperBound
                ? this.scrollVariable < lowerBound
                    ? (this.scrollVariable - upperBound) / (lowerBound - upperBound)
                    : 1
                : 0;
        return fraction * 100 - 100;
    }
    get cardTwoSlideIn(): number {
        let lowerBound = 900;
        let upperBound = lowerBound - 450;
        let fraction =
            this.scrollVariable > upperBound
                ? this.scrollVariable < lowerBound
                    ? (this.scrollVariable - upperBound) / (lowerBound - upperBound)
                    : 1
                : 0;
        return 100 - fraction * 100;
    }

    get colorPicker() {
        let upperBound = 200;
        let lowerBound = 700;
        let fractionNumber =
            this.scrollVariable < lowerBound
                ? this.scrollVariable > upperBound
                    ? (this.scrollVariable - upperBound) / lowerBound
                    : 0
                : 1;
        let number = Math.floor(fractionNumber * 256);
        number = number < 255 ? number : 255;
        let oneth = this.numberToHex(Math.floor(number / 16))?.toString();
        let zeroth = this.numberToHex(number % 16)?.toString();
        let hexValue = oneth?.concat(zeroth) + oneth?.concat(zeroth) + oneth?.concat(zeroth);
        return hexValue;
    }

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

    onScroll(event: any) {
        this.scrollVariable = event.target.scrollTop;
        this.handleScroll(this.scrollVariable);
        let el: any = document.querySelector('.section');
        el.style.color = '-webkit-linear-gradient(blue, #333)';
    }
}
</script>

<style scoped lang="scss">
* {
    font-family: Montserrat, sans-serif;
}
.masterhead {
    height: 100vh;
    // background-image: linear-gradient(
    //     135deg,
    //     rgb(38, 50, 56) 0%,
    //     rgb(88, 101, 224) 69%,
    //     rgb(57, 73, 171) 89%
    // ) !important;
}

.secondHead {
    // height: 100vh;
}

h1 {
    font-size: 4em;
    font-weight: normal;
    // background: -webkit-linear-gradient(#eee, #333);
    // background-clip: text;
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
}
h4 {
    font-weight: normal;
    font-family: Montserrat, sans-serif;
}

h2 {
    font-size: 1.7em;
    font-weight: normal;
}
</style>
