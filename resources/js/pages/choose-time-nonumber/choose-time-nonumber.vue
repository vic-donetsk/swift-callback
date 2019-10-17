<template>
    <section class="swift-widget">
        <div class="swift-widget_block">
            <div class="swift-widget_upper-section" v-if="status == 1">
                <div class="swift-widget_exit">
                    <span @click="exit">{{ __("Close") }}</span>
                    <svg class="swift-widget_cross" @click="exit" xmlns="http://www.w3.org/2000/svg" width="14.483"
                         height="14.483"
                         viewBox="0 0 14.483 14.483">
                        <path id="Path_663" data-name="Path 663"
                              d="M13.994,2.854,9.605,7.243l4.388,4.389A1.671,1.671,0,1,1,11.631,14L7.241,9.607,2.852,14A1.671,1.671,0,0,1,.49,11.632L4.878,7.243.489,2.854A1.671,1.671,0,0,1,2.852.491L7.241,4.88,11.63.491a1.671,1.671,0,0,1,2.363,2.364Z"
                              transform="translate(0.001 -0.002)" fill="#c5daf7"/>
                    </svg>
                </div>
                <img class="swift-widget_img" src="img/illustration/leave-your-phone.svg" alt="SWIFT Call">
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

                <div class="swift-widget_flagPhoneInput">

                    <!--                        TODO: flagPhoneInput-->

                </div>
                <div class="swift-widget_button button mod-blue" @click="select">
                    {{ __("I'm waiting for a call") }}
                </div>
                <div class="swift-widget_callMode-agree">{{ __("By clicking the 'I'm waiting for a call' button, I agree to") }}
                    <a href="#" target="_blank" class="swift-widget_callMode-link">{{ __("Processing of my personal data") }}</a>&nbsp;
                    {{ __("and") }}&nbsp;
                    <a href="#" target="_blank" class="swift-widget_callMode-link">{{ __("Accept the terms of the agreement.") }}</a>
                </div>
            </div>

            <lower-section v-if="status == 1"></lower-section>

            <div class="swift-widget_upper-section" v-if="status == 2">
                <div class="swift-widget_exit">
                    <span @click="exit">{{ __("Close") }}</span>
                    <svg class="swift-widget_cross" @click="exit" xmlns="http://www.w3.org/2000/svg" width="14.483"
                         height="14.483"
                         viewBox="0 0 14.483 14.483">
                        <path id="Path_663" data-name="Path 663"
                              d="M13.994,2.854,9.605,7.243l4.388,4.389A1.671,1.671,0,1,1,11.631,14L7.241,9.607,2.852,14A1.671,1.671,0,0,1,.49,11.632L4.878,7.243.489,2.854A1.671,1.671,0,0,1,2.852.491L7.241,4.88,11.63.491a1.671,1.671,0,0,1,2.363,2.364Z"
                              transform="translate(0.001 -0.002)" fill="#c5daf7"/>
                    </svg>
                </div>
                <img class="swift-widget_img-ok" src="img/illustration/ok-icon.svg" alt="SWIFT OK">
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
    @import 'choose-time-nonumber';
</style>

<script src="./choose-time-nonumber.js"></script>
