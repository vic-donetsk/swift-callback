<template>
    <section class="swift-widget">
        <div class="swift-widget_block">
            <div class="swift-widget_upper-section" v-if="callStatus == 1">
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
                    <exit-block page="chooseTimeNonumber"></exit-block>
                </div>
                <img class="swift-widget_img" :src="$imgDomain + '/img/illustration/select-time.svg'" alt="SWIFT Call">
                <div class="swift-widget_text">
                    {{__("Choose an hour that suits you and us we call as soon as possible")}}
                </div>

                <div class="swift-widget_select-container">
                    <div class="swift-widget_select">
                        <select v-model="selectedDay">
                            <option v-for="day in week" :value="day">{{day}}</option>
                        </select>
                    </div>
                    <div class="swift-widget_select">
                        <select v-model="selectedTime">
                            <option v-for="time in times" :value="time">{{time}}</option>
                        </select>
                    </div>
                </div>

                <flag-phone @updatePhone="updatePhone"></flag-phone>

                <div class="swift-widget_button button mod-blue" @click="select">
                    {{ __("I'm waiting for a call") }}
                </div>
                <div class="swift-widget_callMode-agree">{{ __("By clicking the 'I'm waiting for a call' button, I agree to") }}
                    <a href="#" target="_blank" class="swift-widget_callMode-link">{{ __("Processing of my personal data") }}</a>&nbsp;
                    {{ __("and") }}&nbsp;
                    <a href="#" target="_blank" class="swift-widget_callMode-link">{{ __("Accept the terms of the agreement.") }}</a>
                </div>
            </div>

            <lower-section v-if="callStatus === 1" active="noNumber"></lower-section>

            <div class="swift-widget_upper-section" v-if="callStatus === 2">
                <exit-block page="chooseTimeNonumber"></exit-block>
                <img class="swift-widget_img-ok" :src="$imgDomain + '/img/illustration/ok-icon.svg'" alt="SWIFT OK">
                <div class="swift-widget_text">
                    {{__("You commanded a call")}}
                    {{approvedDate}}
                    {{__("at")}}
                    {{approvedTime}}
                </div>
                <div class="swift-widget_button-back button mod-blue" @click="back">{{ __("Back") }}</div>
            </div>
        </div>
    </section>
</template>

<style lang='scss' scoped>
    @import '../common-styles';
    @import 'choose-time-nonumber';
</style>

<script src="./choose-time-nonumber.js"></script>
