/* eslint-disable @typescript-eslint/camelcase */
import { expect } from 'chai';
import Vue from 'vue';
import Vuex from 'vuex';
import { config } from '@vue/test-utils';
import { createLocalVue, shallowMount, Wrapper } from '@vue/test-utils';
import Vuetify from 'vuetify';
import JobBoard from '@/views/JobBoard.vue';
import { githubJobData } from '@/constants/githubJobData.ts';

Vue.config.ignoredElements = [/v-.*/, /v.*/];
// Vue.use(Vuetify);
const localVue = createLocalVue();
localVue.use(Vuex);
localVue.config.ignoredElements = [/v-.*/, /v.*/];
config.showDeprecationWarnings = false;
declare const global: any;

let state: any;
let mocks: any;
let store: any;

describe('JobBoard', () => {
    let wrapper: Wrapper<JobBoard>;
    let vuetify: any;
    describe('JobBoard Component with job data available', () => {
        state = {
            STORE_KEY: '$_jobsearch',
        };

        store = new Vuex.Store({
            state,
        });

        mocks = {
            $vuetify: { breakpoint: { name: 'sm' } },
            storeModule: {
                gitJobData: githubJobData,
                isDarkTheme: false,
                getGitJobData: () => {
                    return '';
                },
            },
        };

        // beforeEach(() => {
        // });

        before(() => {
            vuetify = new Vuetify();
            global.requestAnimationFrame = (cb: any) => cb();
            wrapper = shallowMount(JobBoard, {
                vuetify,
                mocks,
                store,
                localVue,
            });
        });

        it('should render whole component', () => {
            expect(wrapper.findAll('#job-board').exists()).to.be.true;
        });
        it('should render Show More Button', () => {
            expect(wrapper.find('#view-more').exists()).to.be.true;
        });
        it('should render Total number of result bar', () => {
            expect(wrapper.find('#result-bar').exists()).to.be.true;
        });
        it('should render Jobs in a card', () => {
            expect(wrapper.find('#jobs').exists()).to.be.true;
        });
        it('should not render No Message Bar', () => {
            expect(wrapper.find('#no-data-message').exists()).to.be.false;
        });
    });
});
