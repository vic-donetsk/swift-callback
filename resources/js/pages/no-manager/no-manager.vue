<template>
    <section class="swift-widget">
        <div class="swift-widget_block">
            <div class="swift-widget_upper-section" v-if="status == 1">
                <exit-block page="noManager"></exit-block>
                <img class="swift-widget_img" :src="$imgDomain + '/img/illustration/no-managers.svg'" alt="SWIFT Call">
                <div class="swift-widget_text">
                    {{__("We currently have none manager available...")}}
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

            <lower-section v-if="status == 1"></lower-section>

            <div class="swift-widget_upper-section" v-if="status == 2">
                <exit-block page="noManager"></exit-block>
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
    @import 'no-manager';
</style>

<script src="./no-manager.js"></script>
