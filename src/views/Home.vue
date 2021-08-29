<template>
    <div class="home">
        <BlogPost :post="welcomeScreen"/>
        <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
        <div class="blog-card-wrap">
            <div class="container">
                <h3>View More Recent Blogs</h3>
                <div class="blog-cards">
                    <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index"/>
                </div>
            </div>
        </div>
        <div class="updates">
          <div class="container">
              <h2>Never miss a post, register your free account today!</h2>
              <router-link class="router-button" to="#">
                  Register for Travel Blogs<Arrow class="arrow arrow-light"/>
              </router-link>
          </div>
        </div>
    </div>
</template>

<script>
import BlogPost from '../components/BlogPost';
import BlogCard from '../components/BlogCard';
import Arrow from '../assets/icons/arrow-right.svg';
export default {
    name: 'Home',
    components: {
        BlogPost,
        BlogCard,
        Arrow
    },
    data() {
        return{
            welcomeScreen: {
                title: "welcome!",
                blogPost: "A blog website that collects travel stories, may you have the courage to go forward and the ease to go back.",
                welcomeScreen: true,
                photo: "tripHomePage"
            },
            sampleBlogPost: [
                {
                    title: "Hot summer, mid july",
                    subTitle: "So we beat on, boats against the current, borne back ceaselessly into the past. ",
                    blogCoverPhoto: "homeBlog2"
                },
                {
                    title: "Dreams never grow old",
                    subTitle: "Going against the wind is more suitable for flying！",
                    blogCoverPhoto: "homeBlog3"
                }
            ]
        }
    },
    computed: {
        sampleBlogCards() {
            return this.$store.state.sampleBlogCards;
        }
    }
}
</script>

<style lang="scss" scoped>
.blog-card-wrap{
    h3{
        font-weight: 300;
        font-size: 28px;
        margin-bottom: 32px;
    }
}
.updates{
    .container{
        padding: 100px 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (min-width: 800px) {
            padding: 125px 25px;
            flex-direction: row;
        }
        .router-button{
            display: flex;
            font-size: 14px;
            text-decoration: none;
            @media (min-width: 800px) {
                margin-left: auto;
            }
        }
        h2{
            font-weight: 300;
            font-size: 32px;
            max-width: 425px;
            width: 100%;
            text-align: center;
            text-transform: uppercase;
            @media (min-width:800px) {
                text-align: initial;
                font-size: 40px;
            }
        }
    }
}
</style>