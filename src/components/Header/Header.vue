<template>
    <header class="header">
        <div class="app-header">
            <div class="app-header__panel">
                <div class="app-header__left flex">
                    <div class="logo-container">
                        <h4 class="logo">My Vue-app</h4>
                    </div>
                    <button class="harmburger-btn btn reset-btn">
                        <i class='uil uil-bars'></i>
                    </button>
                </div>
                <nav class="app-header__nav to-right">
                    <ul >
                        <li class="list" @click="popup">
                                <a href="#" class="link">
                                    <i class='uil uil-bell'></i>
                                </a>
                        </li>
                        <li class="list" @click="popup">
                                <a href="#" class="link"> <i class='uil uil-comment-alt-lines'></i></a>
                            </li>
                            <li class="profile list">
                                <div class="flex"   @click="toggleDropdown" ref="profileToggleNode">
                                    <img src="/assets/avatar.png" class="profile-image" alt="profile image"/>
                                    <p class="name">akinola!</p>
                                </div>
                                <dropdown
                                    :isDropdownOpen="isDropdownOpen"
                                    :styles="setStyles()"
                                    :refNode="profileToggleNode"
                                    @away= "hideDropdown"
                                >
                                <ul >
                                    <li>
                                        <router-link to="/settings"><i class="uil uil-cog"></i> Settings </router-link>
                                    </li>
                                    <li>
                                        <router-link to="/logout"><i class="uil uil-exit"></i> Logout</router-link>
                                    </li>
                                </ul>
                                </dropdown>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="header-menu">
            <div class="header-menu__panel">
                <div v-if="viewContent" >
                    <router-link to="/" class="back-button reset-btn">
                        <i class='uil uil-angle-left'></i> Go home
                    </router-link>
                </div>
                <ul class="" v-else>
                    <li >
                        <router-link to="/" > <i class='uil uil-rss'></i> My Feed</router-link>
                    </li>
                    <li >
                        <router-link to="/activity"><i class='uil uil-analytics'></i> Activity</router-link>
                    </li>
                    <li >
                        <router-link to="/settings"><i class='uil uil-cog'></i> Settings</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>
<script>

import Dropdown from "../Dropdown/Dropdown.vue";

export default {
    name:"app-header",
    components: {
        Dropdown
    },
    data(){
        return {
            isDropdownOpen: false,
            profileToggleNode: ""
        }
    },
    props:{
        viewContent:{
            type:Boolean,
            default: false
        }
    },
    mounted() {
        this.profileToggleNode = this.$refs.profileToggleNode;
    },

    methods:{
        setStyles(){
            return {
                top: "40px",
                right: "60px",
                width: "160px",
            }
        },
        goBack: function (event){
            console.log( "go back")
            this.$router.go(-1);
        },
        popup(){
            // we must pass object params with all the information
            const params = {
                title: "🤢 Coming Soon",
                text: "This feature is currently not available. Endeavour to check back later. Thanks!",
                confirmEnabled: false,
                // we are passing callback method for our confirm button
                onConfirm: () => {
                 this.$toaster.success("Confirmed!!!")
                }
            };
            // now we can call function that will reveal our modal
            this.$dialog.show(params)
        },
        toggleDropdown(){
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        hideDropdown(){
            this.isDropdownOpen = false;
        }
    }
}
</script>
<style lang="scss" src="./Header.scss"></style>
