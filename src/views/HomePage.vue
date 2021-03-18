<template>
    <v-container id="scroll-target" style="max-height: calc(100vh - 56.8px); height: auto" class="overflow-y-auto">
        <v-row v-scroll:#scroll-target="onScroll" justify="center" class="masthead primary" id="masterHead">
            <v-col cols="auto button">
                <v-lazy
                    v-model="isActive"
                    :options="{
                        threshold: 0.1,
                    }"
                    min-height="200"
                    transition="fade-transition"
                >
                    <h1
                        style="color: black"
                        :style="{
                            width: '100%',
                            marginTop: '300px',
                            marginLeft: doubleScrollValue + 'px',
                            overflowX: 'hidden',
                        }"
                    >
                        {{ scrollInvoked }}
                        <Roller :charList="charList" defaultChar=" " :transition="1" text="Shrikant Patel"></Roller>
                    </h1>
                </v-lazy>
            </v-col>
        </v-row>
    </v-container>

    <!-- <v-container v-scroll.#masterhead="onScroll">
        
    </v-container> -->
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
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
        window.addEventListener('scroll', this.onScroll);
    }

    get doubleScrollValue(): number {
        return this.scrollInvoked * 3;
    }

    get charList(): string[] {
        let capsCharList = Characters.map(char => (char = char?.toUpperCase()));
        let specialChar = ['.', '-'];
        let charList: string[] = [];
        charList.push(...Characters, ...capsCharList, ...specialChar, ' ');
        return charList;
    }
    onScroll(event: any) {
        this.scrollInvoked = event.target.scrollTop;
    }
}
</script>

<style scoped lang="scss">
.masthead {
    // align-items: center;
    height: 200rem;
    // background-image: linear-gradient(
    //     135deg,
    //     rgb(38, 50, 56) 0%,
    //     rgb(88, 101, 224) 69%,
    //     rgb(57, 73, 171) 89%
    // ) !important;
    // margin: auto;
    color: white;
}

h1 {
    font-size: 4em;
    font-weight: normal;
}

h2 {
    font-size: 1.7em;
    font-weight: normal;
}
.para {
    margin-top: 300px;
}
</style>
