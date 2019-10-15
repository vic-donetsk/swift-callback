<template>
    <div class="swift-widget-button" @click="open">
<!--        {{ __('Button') }}-->
        <div id="swift-widget-button_circle-1" class="swift-widget-circle" v-if="visibleCircles">
            <img src="img/pulse-button/ellipse_5.svg"alt="SWIFT Button">
        </div>
        <div id="swift-widget-button_circle-2" class="swift-widget-circle" v-if="visibleCircles">
            <img src="img/pulse-button/ellipse_4.svg"alt="SWIFT Button">
        </div>
        <div id="swift-widget-button_circle-3" class="swift-widget-circle" v-if="visibleCircles">
            <img src="img/pulse-button/ellipse_3.svg"alt="SWIFT Button">
        </div>
        <div id="swift-widget-button_circle-4" class="swift-widget-circle" v-if="visibleCircles">
            <img src="img/pulse-button/ellipse_2.svg"alt="SWIFT Button">
        </div>
        <div id="swift-widget-button_circle-5" :class="{mod_visible: visibleButton}">
            <img src="img/pulse-button/ellipse_1.svg"alt="SWIFT Button">
        </div>
    </div>
</template>

<script src="./widget-button.js"></script>

<style lang='scss' scoped>
    @import 'widget-button';
</style>
