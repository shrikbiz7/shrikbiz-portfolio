// import Vue from 'vue';
// import axios from 'axios';
import { githubJobData } from '@/constants/githubJobData.ts';

export default {
    // jobs.github.com is not responding, as the domain is localhost and not github as CORs policy is applied.
    // gitJobApi: async () => {
    //     const response = await axios.get(`https://jobs.github.com/positions.json`);
    //     const json = response;
    //     // if (!json || json.error.message !== 'SUCCESS') {
    //     //     alert('Alert was not created. Please check network and try again');
    //     // }
    //     return json;
    // },

    getJobApi: () => {
        return githubJobData;
    },
};
