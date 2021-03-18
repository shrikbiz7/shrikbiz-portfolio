<template>
    <v-container
        id="scroll-target"
        style="max-height: calc(100vh - 56.8px); height: auto; overflow-x: hidden"
        class="overflow-y-auto"
    >
        <v-lazy
            v-model="isActive"
            :options="{
                threshold: 0.1,
            }"
            min-height="200"
            transition="fade-transition"
        >
            <v-row v-scroll:#scroll-target="onScroll" justify="center" class="masthead" id="masterHead">
                <v-col cols="auto">
                    <v-img
                        max-height="400"
                        max-width="1300"
                        :style="{ height: imgHeight + 'px' }"
                        style="margin: 400px 0; overflow-x: hidden"
                        src="@/assets/darkthemeWP.jpeg"
                    >
                        <div width="100%" style="color:white" align="center">
                            <h1
                                :style="{
                                    marginTop: '50px',
                                    fontFamily: 'Helvetica',
                                    width: '100%',
                                    overflowX: 'hidden',
                                }"
                            >
                                <span
                                    v-for="(letter, index) in 'ShrikantPatel'"
                                    :key="index"
                                    :style="{
                                        fontSize: fontSize + 'px',
                                    }"
                                >
                                    {{ letter }}
                                </span>
                            </h1>
                            <h4
                                align="center"
                                :style="{
                                    width: '100%',
                                    overflowX: 'hidden',
                                }"
                            >
                                FrontEnd Software Engineer
                            </h4>
                        </div>
                    </v-img>
                </v-col>
            </v-row>
        </v-lazy>
        <v-lazy
            v-model="isActive"
            :options="{
                threshold: 0.1,
            }"
            min-height="200"
            transition="fade-transition"
        >
            <v-row v-scroll:#scroll-target="onScroll" justify="center" class="secondHead primary" id="masterHead">
                <v-col cols="auto">
                    <div align="center">
                        <h1
                            :style="{
                                marginTop: '300px',
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
                        <h4
                            align="center"
                            :style="{
                                width: '100%',
                                marginLeft: subTitleSpeed + 'px',
                                overflowX: 'none',
                            }"
                        >
                            FrontEnd Software Engineer
                        </h4>
                    </div>
                </v-col>
            </v-row>
        </v-lazy>
    </v-container>

    <!-- <v-container v-scroll.#masterhead="onScroll">
        
    </v-container> -->
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import store from '@/store/store';
import { Characters } from '@/constants/char';

@Component({
    components: {
        Roller: () => import('vue-roller'),
    },
})
export default class HomePage extends Vue {
    storeModule: any;
    isActive: boolean = false;
    scrollInvoked: number = 0;

    async created() {
        if (!this.storeModule) this.storeModule = getModule(store, this.$store);
    }

    get titleSpeed(): number {
        return Math.pow(this.scrollInvoked, 1.35);
    }
    get subTitleSpeed(): number {
        return Math.pow(this.scrollInvoked, 1.2);
    }

    get charList(): string[] {
        let capsCharList = Characters.map(char => (char = char?.toUpperCase()));
        let specialChar = ['.', '-'];
        let charList: string[] = [];
        charList.push(...Characters, ...capsCharList, ...specialChar, ' ');
        return charList;
    }

    get imgHeight() {
        let number: number = this.scrollInvoked / 20;
        let constant = 300;
        constant -= number;
        return constant ? constant : 0;
    }

    get fontSize(): number {
        let number: number = this.scrollInvoked / 45;
        number += 100;
        return number;
    }

    onScroll(event: any) {
        this.scrollInvoked = event.target.scrollTop;
    }
}
</script>

<style scoped lang="scss">
.masthead {
    // align-items: center;
    height: auto;
    // background-image: linear-gradient(
    //     135deg,
    //     rgb(38, 50, 56) 0%,
    //     rgb(88, 101, 224) 69%,
    //     rgb(57, 73, 171) 89%
    // ) !important;
    // margin: auto;
}

.secondHead {
    height: 100rem;
}

h1 {
    font-size: 4em;
    font-weight: normal;
}
h4 {
    font-weight: normal;
}

h2 {
    font-size: 1.7em;
    font-weight: normal;
}
</style>
