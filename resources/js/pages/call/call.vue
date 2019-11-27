<template>
    <section class="swift-widget">
        <div class="swift-widget_block">
            <div class="swift-widget_upper-section">
                <exit-block page="call"></exit-block>

                <div v-if="firstApelWindow === true">
                    <img class="swift-widget_img" :src="$imgDomain + '/illustration/call.svg'" alt="SWIFT Call">
                    <div class="swift-widget_text">
                        {{__("Hi, you want us to come back with a call within 28 seconds?")}}
                    </div>
                    <div class="swift-widget_staticTimer">00:27:99</div>

                    <flag-phone @updatePhone="updatePhone"></flag-phone>

                    <div class="swift-widget_button button mod-blue" @click="launchTimer">
                        {{ __("I'm waiting for a call") }}
                    </div>
                    <div class="swift-widget_callMode-agree">{{ __("By clicking the 'I'm waiting for a call' button, I agree to") }}<br>
                        <a href="#" target="_blank" class="swift-widget_callMode-link">{{ __("Processing of my personal data") }}</a>&nbsp;
                        {{ __("and") }}&nbsp;
                        <a href="#" target="_blank" class="swift-widget_callMode-link">{{ __("Accept the terms of the agreement.") }}</a>
                    </div>
                    <div class="swift-widget_callback" @click="chooseTime">
                        <img class="swift-widget_clock" :src="$imgDomain + '/clock.svg'" alt="swift">
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
    @import '../common-styles';
    @import 'call';
</style>

<script src="./call.js"></script>
