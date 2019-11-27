<template>
    <div class="swift-widget-button_wrapper">
        <div class="swift-widget-button" :class="{mod_minimalSize: !isPulsing}" @click="open">

            <div id="swift-widget-button_circle-1" :class="{mod_visible: visibleButton, mod_minimalSize: !isPulsing}">
                <img :src="$imgDomain + '/pulse-button/ellipse_1.svg'" alt="SWIFT Button">
            </div>
            <div id="swift-widget-button_circle-2" class="swift-widget-circle" v-if="visibleCircles"></div>
            <div id="swift-widget-button_circle-3" class="swift-widget-circle" v-if="visibleCircles"></div>
            <div id="swift-widget-button_circle-4" class="swift-widget-circle" v-if="visibleCircles"></div>
            <div id="swift-widget-button_circle-5" class="swift-widget-circle" v-if="visibleCircles"></div>

            <div v-if="visibleToggler"
                 :class="isPulsing ? 'swift-widget-button_bigToggler' : 'swift-widget-button_smallToggler'"
                 class="swift-widget-button_mobileToggler" @click.stop="togglePulse">
                <svg v-if="isPulsing" class="swift-widget-button_togglerIcon" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20">
                    <g transform="translate(-1641 -852)">
                        <g transform="translate(1641 852)" fill="#10357a" stroke="#fff" stroke-width="2">
                            <circle cx="10" cy="10" r="10" stroke="none"/>
                            <circle cx="10" cy="10" r="9" fill="none"/>
                        </g>
                        <line x2="9" transform="translate(1646.5 862.5)" fill="none" stroke="#fff" stroke-width="2"/>
                    </g>
                </svg>
                <svg v-if="!isPulsing" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     x="0px" y="0px"
                     viewBox="0 0 17 17" style="enable-background:new 0 0 17 17;" xml:space="preserve">
                    <g id="_-" transform="translate(-0.488)">
                    <g id="Ellipse_143" transform="translate(0.487)">
                        <circle class="st0" cx="8.5" cy="8.5" r="7.2" fill="#10357A"/>
                        <circle class="st1" cx="8.5" cy="8.5" r="7.5" fill="none" stroke="#fff" stroke-width="2"/>
                    </g>
                        <line id="Line_175" class="st1" x1="6.6" y1="8.7" x2="12" y2="8.7" fill="none" stroke="#fff" stroke-width="2"/>
                        <line id="Line_176" class="st1" x1="9.3" y1="11.4" x2="9.3" y2="6.1" fill="none" stroke="#fff" stroke-width="2"/>
                    </g>
                </svg>

            </div>

        </div>
    </div>
</template>

<script src="./widget-button.js"></script>

<style lang='scss' scoped>
    @import 'widget-button';
</style>
