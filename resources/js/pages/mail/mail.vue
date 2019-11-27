<template>
    <section class="swift-widget">
        <div class="swift-widget_block">
            <div class="swift-widget_upper-section">
                <exit-block page="mail"></exit-block>
                <img class="swift-widget_img" :src="$imgDomain + '/illustration/email.svg'" alt="SWIFT Email">
                <div class="swift-widget_text">
                    {{__("Leave your message and we will respond to your email.")}}
                </div>
                <textarea :placeholder="__('Leave a message')" class="swift-widget_mail-message" v-model="message"></textarea>
                <div class="swift-widget_personal-data">
                    <input type="email" placeholder="Email" v-model="email">
                    <input type="text" :placeholder="__('Name')" v-model="name">

                </div>

                <flag-phone></flag-phone>

                <div class="swift-widget_button button mod-blue" @click="sendEmail">{{ __("I am waiting for a message") }}</div>
            </div>

            <lower-section active="mail"></lower-section>

        </div>
    </section>
</template>

<style lang='scss' scoped>
    @import '../common-styles';
    @import 'mail';
</style>

<script src="./mail.js"></script>
