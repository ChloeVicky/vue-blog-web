<template>
    <footer>
        <div class="container">
            <div class="left">
                <div class="col-1">
                    <router-link class="header" :to="{name: 'Home'}">Travel Blogs</router-link>
                    <ul>
                        <li><a href="#"><youtube class="svg-icon" /></a></li>
                        <li><a href="#"><instagram class="svg-icon" /></a></li>
                        <li><a href="#"><twitter class="svg-icon" /></a></li>
                        <li><a href="#"><linkedin class="svg-icon" /></a></li>
                    </ul>
                </div>
                <div class="col-2">
                    <ul>
                        <router-link class="link" :to="{name: 'Home'}">Home</router-link>
                        <router-link class="link" :to="{name: 'Blogs'}">Blogs</router-link>
                        <router-link class="link" :to="{name: 'newpost'}">Post</router-link>
                        <router-link class="link" :to="{name: 'Login'}">Login/Register</router-link>
                    </ul>
                </div>
            </div>
            <div class="right">
                <p>Image Source - Unsplash</p>
                <p>Copyright All Reserved</p>
            </div>
        </div>
    </footer>
</template>

<script>
import instagram from '../assets/icons/Instagram.svg';
import linkedin from '../assets/icons/linkedin.svg';
import twitter from '../assets/icons/twitter.svg';
import youtube from '../assets/icons/youtube.svg';
export default {
    name: 'Footer',
    components: {
        instagram,
        linkedin,
        twitter,
        youtube
    },
    data() {
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
footer{
    margin-top: auto;
    padding: 100px 25px;
    background: #303030;
    .container{
        display: flex;
        flex-direction: column;
        gap: 32px;
        @media (min-width: 800px) {
            flex-direction: row;
            gap: 0px;
        }
        > div{
            display: flex;
            flex: 1;
        }
        .left{
            gap: 32px;
            color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            @media (min-width: 800px) {
                flex-direction: row;
                align-items: initial;
                gap: 0;
            }

            .header{
                text-align: center;
                font-size: 24px;
                color: #fff;
                text-decoration: none;
                font-weight: 600;
                @media (min-width: 800px) {
                    text-align: initial;
                }
            }
            ul{
                gap: 16px;
                list-style: none;
                display: flex;
            }

            .col-1,.col-2{
                gap: 32px;
                display: flex;
                flex: 1;
                @media (min-width: 800px) {
                    gap: 0;
                }
            }

            .col-1{
                flex-direction: column;
                ul{
                    margin-top: auto;
                    li{
                        display: flex;
                        align-items: center;
                        .svg-icon{
                            width: 24px;
                            height: auto;
                            color: #fff;
                        }
                    }
                }
            }

            .col-2{
                ul{
                    height: 100%;
                    justify-content: center;
                    flex-direction: row;
                    flex-wrap: wrap;
                    @media (min-width: 800px) {
                        flex-direction: column;
                    }
                    .link{
                        font-size: 16px;
                        font-weight: 500;
                        color: #fff;
                        text-decoration: none;
                    }
                }
            }
        }
        .right{
            gap: 32px;
            color: #fff;
            align-items: center;
            flex-direction: column;
            @media (min-width: 800px) {
                align-items: flex-end;
                gap: 0;
            }
        }
        p{
            margin-top: auto;
        }
    }
}
</style>