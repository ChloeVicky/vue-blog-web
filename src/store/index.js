import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        sampleBlogCards: [
            {blogTitle: "Blog card #1", blogCoverPhoto: "blogCard-1", blogDate: "Aug 30, 2021"},
            {blogTitle: "Blog card #2", blogCoverPhoto: "blogCard-2", blogDate: "Aug 30, 2021"},
            {blogTitle: "Blog card #3", blogCoverPhoto: "blogCard-3", blogDate: "Aug 30, 2021"},
            {blogTitle: "Blog card #4", blogCoverPhoto: "blogCard-4", blogDate: "Aug 30, 2021"}
        ],
        editPost: null
    },
    mutations:{
        toggleEditPost(state, payload){
            state.editPost = payload;
        }
    },
    actions:{

    },
    modules:{

    }
})