<template>
    <v-navigation-drawer
        v-if="viewRatio !== 'lg'"
        @click="handleDrawer($event)"
        :value="drawer"
        v-model="drawerStatus"
        fixed
        temporary
        touchless
        class="ma-auto rounded-r-lg"
        height="auto"
    >
        <!--  -->
        <div>
            <v-row justify="center" class="headerPrimary" style="padding-top:20px">
                <v-col cols="auto">
                    <h1>Menu</h1>
                </v-col>
            </v-row>
            <v-row justify="center" class="accent">
                <v-col cols="auto">
                    <div class="mt-5">
                        <span v-if="!theme"> <v-icon>mdi-white-balance-sunny </v-icon>{{ `  ` }} Light Theme </span>
                        <span v-if="theme"> <v-icon>mdi-weather-night</v-icon>{{ `  ` }} Dark Theme </span>
                    </div>
                </v-col>
                <v-col cols="auto">
                    <div>
                        <v-switch color="secondary" @change="handleThemeSwitch"></v-switch>
                    </div>
                </v-col>
            </v-row>

            <v-tabs vertical color="headerPrimary">
                <v-tab as="router-link" to="/">
                    <v-icon left>
                        mdi-home-outline
                    </v-icon>
                    Home Page
                </v-tab>
                <v-tab as="router-link" to="/search">
                    <v-icon left>
                        mdi-briefcase-search
                    </v-icon>
                    Job Search
                </v-tab>
            </v-tabs>
        </div>
    </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import store from '@/store/store';
import { getModule } from 'vuex-module-decorators';

@Component
export default class SideBar extends Vue {
    storeModule: any;
    // currentTheme: object = {};
    themeList: string[] = ['Light Theme', 'Dark Theme'];
    drawerStatus = null;

    created() {
        if (!this.storeModule) this.storeModule = getModule(store, this.$store);
    }

    get drawer() {
        this.drawerStatus = this.storeModule.isSideBar;
        return this.storeModule.isSideBar;
    }

    updated() {
        if (!this.drawerStatus) this.storeModule.hideSideBar();
    }

    get viewRatio() {
        //xs, sm, md, lg, xl
        return this.$vuetify.breakpoint.name;
    }

    get currentThemeText() {
        return this.storeModule.isDarkTheme ? 'Dark Theme' : 'Light Theme';
    }

    get theme() {
        return this.storeModule.isDarkTheme;
    }

    handleThemeSwitch() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        this.storeModule.changeStoreTheme(this.$vuetify.theme.dark);
    }
}
</script>
