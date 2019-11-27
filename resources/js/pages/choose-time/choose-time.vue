<template>
    <section class="swift-widget">
        <div class="swift-widget_block" >
            <div class="swift-widget_upper-section" v-if="status != 3">
                <div class="swift-widget_exit-double">
                    <div class="swift-widget_exit-left">
                        <svg class="swift-widget_arrow" @click="backTo" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 20.153 10.827">
                            <g id="înapoi" transform="translate(-1719.347 -94.087)">
                                <line id="Line_16" data-name="Line 16" x1="17.739"
                                      transform="translate(1720.761 99.522)" fill="none" stroke="#c5daf7"
                                      stroke-linecap="round" stroke-width="2"/>
                                <line id="Line_19" data-name="Line 19" x1="3.739" y2="4.022"
                                      transform="translate(1720.761 95.5)" fill="none" stroke="#c5daf7"
                                      stroke-linecap="round" stroke-width="2"/>
                                <line id="Line_20" data-name="Line 20" x1="3.739" y1="3.978"
                                      transform="translate(1720.761 99.522)" fill="none" stroke="#c5daf7"
                                      stroke-linecap="round" stroke-width="2"/>
                            </g>
                        </svg>
                        <span @click="backTo">{{ __("Back") }}</span>
                    </div>
                    <exit-block page="chooseTime"></exit-block>
                </div>
                <img class="swift-widget_img" :src="$imgDomain + '/illustration/select-time.svg'" alt="SWIFT Call">
                <div class="swift-widget_text">
                    {{__("Choose an hour that suits you and us we call as soon as possible")}}
                </div>

                <div class="swift-widget_selection-wrapper">
                    <div class="swift-widget_selection-block">

                        <div class="swift-widget_time-setup" v-if="status == 1">
                            <img :src="$imgDomain + '/angle-up.svg'" @click="plusHour" alt="swift">
                            <input type="number" :value="hours">
                            <img :src="$imgDomain + '/angle-down.svg'" @click="minusHour" alt="swift">
                        </div>
                        <div class="swift-widget_time-setup" v-if="status == 1">
                            :
                        </div>
                        <div class="swift-widget_time-setup" v-if="status == 1">
                            <img :src="$imgDomain + '/angle-up.svg'" @click="plusMinute " alt="swift">
                            <input type="number" :value="minutes">
                            <img :src="$imgDomain + '/angle-down.svg'" @click="minusMinute" alt="swift">
                        </div>

                        <div class="swift-widget_time-setup" v-if="status == 2">
                            <img :src="$imgDomain + '/angle-up.svg'" @click="plusDay" alt="swift">
                            <div class="swift-widget_selection-day">{{day}}</div>
                            <div class="swift-widget_selection-date">({{date}})</div>

                            <img :src="$imgDomain + '/angle-down.svg'" @click="minusDay" alt="swift">
                        </div>

                    </div>

                    <div class="swift-widget_selection-buttons">
                        <div class="swift-widget_selection-button mod_cancel" @click="cancel">{{__("Cancel")}}</div>
                        <div class="swift-widget_selection-button mod_select" @click="select">{{__("Select")}}</div>
                    </div>
                </div>
            </div>

            <lower-section v-if="status != 3"></lower-section>

            <div class="swift-widget_upper-section" v-if="status == 3">
                <exit-block page="chooseTime"></exit-block>
                <img class="swift-widget_img-ok" :src="$imgDomain + '/illustration/ok-icon.svg'" alt="SWIFT OK">
                <div class="swift-widget_text">
                    {{__("You commanded a call")}}
                    {{approvedDate}}
                    {{__("at")}}
                    {{approvedTime}}
                </div>
                <div class="swift-widget_button-back button mod-blue" @click="backTo">{{ __("Back") }}</div>
            </div>
        </div>
    </section>
</template>

<style lang='scss' scoped>
    @import '../common-styles';
    @import 'choose-time';
</style>

<script src="./choose-time.js"></script>
