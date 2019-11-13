<template>
    <div class="swift-widget_lower-section" :class="activePage">

        <div class="swift-widget_links-desktop">
            <svg class="links_icon" id="call" @click="call" width="36.383" height="36.673" viewBox="0 0 36.383 36.673">
                <use xlink:href="#symbolCall"/>
            </svg>
            <svg class="links_icon" id="chat" @click="chat" width="36.383" height="36.673" viewBox="0 0 36.383 36.673">
                <use xlink:href="#symbolChat"/>
            </svg>
            <svg id="messenger" class="links_icon" @click="messenger" width="36.383" height="36.673" viewBox="0 0 36.383 36.673">
                <use xlink:href="#symbolMessenger"/>
            </svg>
            <svg id="telegram" class="links_icon" @click="telegram" width="31.332" height="31.582" viewBox="0 0 31.332 31.582">
                <use xlink:href="#symbolTelegram"/>
            </svg>
            <svg id="vk" class="links_icon" @click="vk" width="31.332" height="31.582" viewBox="0 0 31.332 31.582">
                <use xlink:href="#symbolVk"/>
            </svg>
            <svg id="viber" class="links_icon" @click="viber" width="31.332" height="31.582" viewBox="0 0 31.332 31.582">
                <use xlink:href="#symbolViber"/>
            </svg>
            <svg id="whatsapp" class="links_icon" @click="whatsapp" width="31.332" height="31.582" viewBox="0 0 31.332 31.582">
                <use xlink:href="#symbolWhatsapp"/>
            </svg>
            <svg id="mail" class="links_icon" @click="mail" width="36.383" height="36.673" viewBox="0 0 36.383 36.673">
                <use xlink:href="#symbolMail"/>
            </svg>
        </div>

        <div class="swift-widget_links-mobile" v-if="mobileState === 1">
            <svg class="links_icon" id="call" @click="call" width="36.383" height="36.673" viewBox="0 0 36.383 36.673">
                <use xlink:href="#symbolCall"/>
            </svg>
            <svg class="links_icon" id="chat" @click="chat" width="36.383" height="36.673" viewBox="0 0 36.383 36.673">
                <use xlink:href="#symbolChat"/>
            </svg>
            <svg id="messenger" class="links_icon" @click="messenger" width="36.383" height="36.673" viewBox="0 0 36.383 36.673">
                <use xlink:href="#symbolMessenger"/>
            </svg>
            <svg id="telegram" class="links_icon" @click="telegram" width="31.332" height="31.582" viewBox="0 0 31.332 31.582">
                <use xlink:href="#symbolTelegram"/>
            </svg>
            <svg id="rightArrow" class="links_icon" @click="toRightMenu" width="24.383" height="16.78" viewBox="0 0 24.383 16.78">
                <use xlink:href="#symbolRightArrow"/>
            </svg>
        </div>

        <div class="swift-widget_links-mobile" v-if="mobileState === 2">
            <svg id="leftArrow" class="links_icon" @click="toLeftMenu" width="24.383" height="16.78" viewBox="0 0 24.383 16.78">
                <use xlink:href="#symbolLeftArrow"/>
            </svg>
            <svg id="vk" class="links_icon" @click="vk" width="31.332" height="31.582" viewBox="0 0 31.332 31.582">
                <use xlink:href="#symbolVk"/>
            </svg>
            <svg id="viber" class="links_icon" @click="viber" width="31.332" height="31.582" viewBox="0 0 31.332 31.582">
                <use xlink:href="#symbolViber"/>
            </svg>
            <svg id="whatsapp" class="links_icon" @click="whatsapp" width="31.332" height="31.582" viewBox="0 0 31.332 31.582">
                <use xlink:href="#symbolWhatsapp"/>
            </svg>
            <svg id="mail" class="links_icon" @click="mail" width="36.383" height="36.673" viewBox="0 0 36.383 36.673">
                <use xlink:href="#symbolMail"/>
            </svg>
        </div>

        <div v-if="active !== 'chat'" class="swift-widget_created-by">{{ __("Created by SwiftCallBack") }}</div>

        <svg-sprite></svg-sprite>

    </div>
</template>

<style lang='scss' scoped>
    @import 'lower-section';
</style>

<script src="./lower-section.js"></script>
