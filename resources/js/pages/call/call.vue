<template>
    <section class="swift-widget">
        <div class="swift-widget_block">
            <div class="swift-widget_upper-section">
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
                <div v-if="firstApelWindow === true">
                    <img class="swift-widget_img" src="img/illustration/leave-your-phone.svg" alt="SWIFT Call">
                    <div class="swift-widget_text">
                        {{__("Hi, you want us to come back with a call within 28 seconds?")}}
                    </div>
                    <div class="swift-widget_staticTimer">00:27:99</div>
                    <div class="swift-widget_flagPhoneInput">

<!--                        TODO: flagPhoneInput-->

                    </div>
                    <div class="swift-widget_button button mod-blue" @click="launchTimer">
                        {{ __("I'm waiting for a call") }}
                    </div>
                    <div class="swift-widget_callMode-agree">{{ __("By clicking the 'I'm waiting for a call' button, I agree to") }}
                        <a href="#" target="_blank" class="swift-widget_callMode-link">{{ __("Processing of my personal data") }}</a>&nbsp;
                        {{ __("and") }}&nbsp;
                        <a href="#" target="_blank" class="swift-widget_callMode-link">{{ __("Accept the terms of the agreement.") }}</a>
                    </div>
                    <div class="swift-widget_callback" @click="chooseTime">
                        <img class="swift-widget_clock" src="/img/clock.svg" alt="swift">
                        {{ __("Choose an appropriate time for the call") }}
                    </div>
                </div>
                <div v-else>
                    <div class="swift-widget_workingTimer">{{shownTime}}</div>
                </div>
            </div>

            <lower-section active="call"></lower-section>

        </div>
    </section>
</template>

<style lang='scss' scoped>
    @import 'call';
</style>

<script src="./call.js"></script>
