<template>
    <section class="swift-widget">
        <div class="swift-widget_block">
            <div class="swift-widget_upper-section">
                <exit-block page="telegram"></exit-block>
                <img class="swift-widget_img" :src="$imgDomain + '/img/illustration/telegram.svg'" alt="SWIFT Viber">
                <div class="swift-widget_text">
                    {{__("We are also on Telegram...")}}
                </div>
                <div class="swift-widget_button button mod-blue">{{ __("Write in Telegram") }}</div>
            </div>
            <lower-section active="telegram" @click="startTelegram"></lower-section>
        </div>
    </section>
</template>

<style lang='scss' scoped>
    @import '../common-styles';
    @import 'telegram';
</style>

<script src="./telegram.js"></script>

