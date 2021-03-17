/* eslint-disable @typescript-eslint/camelcase */
import { expect } from 'chai';
import Vue from 'vue';
import Vuex from 'vuex';
import { config } from '@vue/test-utils';
import { createLocalVue, shallowMount, Wrapper } from '@vue/test-utils';
import Vuetify from 'vuetify';

//dummy data
import App from '@/App.vue';

Vue.config.ignoredElements = [/v-.*/];
Vue.use(Vuetify);

const localVue = createLocalVue();
config.showDeprecationWarnings = false;

localVue.use(Vuex);
localVue.config.ignoredElements = [/v-.*/];

let state: any;
let mocks: any;
let store: any;

describe('App', () => {
    let wrapper: Wrapper<App>;
    // let vuetify: any;
    describe('App should render', () => {
        state = {
            STORE_KEY: '$_jobsearch',
        };

        store = new Vuex.Store({
            state,
        });

        mocks = {
            $vuetify: { breakpoint: { name: 'sm' } },
            storeModule: {
                gitJobData: [
                    {
                        id: '4e8f23db-99cf-4184-86cf-9f21aa241c76',
                        type: 'Full Time',
                        url: 'https://jobs.github.com/positions/4e8f23db-99cf-4184-86cf-9f21aa241c76',
                        created_at: 'Tue Feb 23 15:56:58 UTC 2021',
                        company: 'Western Governors University',
                        company_url: 'http://www.wgu.edu',
                        location: 'Remote',
                        title: 'Senior Principal Engineer',
                        description:
                            '<p>If you’re passionate about building a better future for individuals, communities, and our country—and you’re committed to working hard to play your part in building that future—consider WGU as the next step in your career.</p>\n<p>Driven by a mission to expand access to higher education through online, competency-based degree programs, WGU is also committed to being a great place to work for a diverse workforce of student-focused professionals. The university has pioneered a new way to learn in the 21st century, one that has received praise from academic, industry, government, and media leaders. Whatever your role, working for WGU gives you a part to play in helping students graduate, creating a better tomorrow for themselves and their families.</p>\n<p>In October 2020, we formally announced our intention to be leaders and active contributors in the Open Source community. Since this announcement, we’ve created a product, The Open Skills Management Tool, that we wish to open source.  Other endeavors, such as our work with the Open EdX Learning Management System, which is open source, but to which we’ve made significant changes in order to increase that system’s ability to scale in a containerized world.</p>\n<p>In this role, you’ll work with all of EdTech, legal, and our Open Source Program Planning Office to help define what Open Source at WGU means and to build our open source community.  This is an exciting opportunity to work with all levels of the organization and leave a lasting impact here and on the higher education community at large.</p>\n<p>QUALIFICATIONS:</p>\n<ul>\n<li>10+ years’ experience leading software engineering teams as a working architect and/or engineer responsible for team culture, practices, and responsibilities for producing working deployment artifacts.</li>\n<li>Experience working on at least one open-source project</li>\n<li>Experience in working with the various integration models (PR, fork, etc) when working in an open-source community.</li>\n<li>Have a deep understanding of UML and use UML to model systems as architectural artifacts that feed the SDLC.</li>\n<li>Experience with and have demonstrable skills in performing business analysis using UML to create business models, logical system deployment diagrams, class diagrams, state machines, etc.</li>\n<li>Excellent communication and organizational skills.</li>\n<li>Familiarity with basic engineering tools such as Git, Maven/Gradle, unit testing frameworks, integration testing frameworks, and practices, CICD to realize infrastructure as code, etc.</li>\n</ul>\n<p>RESPONSIBILITIES INCLUDE:</p>\n<ul>\n<li>Reporting to Chief Architect – work with CA on various aspects of WGU engineering which may or may not contribute to the Open Source Program.</li>\n<li>Align and take ownership of enterprise architecture directives for further propagation to engineering teams.</li>\n<li>Work with many different engineering teams to train, mentor, solution and ensure alignment with enterprise architecture directives and guard rails.</li>\n<li>Defining, managing, and streamlining all engineering aspects of the WGU engineering and open-source process at WGU (from people processes to tooling automation).</li>\n<li>Owning and managing WGU’s open-source presence and reputation on GitHub and beyond.</li>\n<li>Driving involvement and recognition of the open-source program internally at WGU.</li>\n<li>Aligning goals of the program with larger product and business goals.</li>\n<li>Building awareness of WGU open-source externally and increasing overall WGU involvement in the open-source community.</li>\n<li>Establishing WGU as a high-contributing member of industry-leading Open-Source initiatives.</li>\n<li>Managing our process for evaluating incoming open-source code for use at WGU</li>\n</ul>\n<p>We’re very excited to meet people interested in this role! Please get in touch with us to learn more.</p>\n',
                        how_to_apply:
                            '<p>Email your resume to <a href="mailto:seth.davis@wgu.edu">seth.davis@wgu.edu</a> OR apply at <a href="https://wgu.careers/SrPrincipal">https://wgu.careers/SrPrincipal</a></p>\n',
                        company_logo:
                            'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBazZhIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8161c0b2a31694e608f97e9de2b68e74717fc4df/WGU-MarketingLogo_Natl_RGB_Owl_Tag_4-1-2017.png',
                    },
                ],
                isDarkTheme: false,
            },
        };

        // beforeEach(() => {
        //     vuetify = new Vuetify();
        // });

        before(() => {
            wrapper = shallowMount(App, {
                mocks,
                store,
                localVue,
            });
        });

        it('should render app tag on mount', () => {
            expect(wrapper.find('#app').exists()).to.be.true;
        });
        it('should sidebar show be as default', () => {
            expect(wrapper.find('#sidebar').exists()).to.be.false;
        });
    });
});
