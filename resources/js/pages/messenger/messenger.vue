<template>
    <section class="swift-widget">
        <div class="swift-widget_block">
            <div class="swift-widget_upper-section">
                <exit-block page="messenger"></exit-block>
                <img class="swift-widget_img" :src="$imgDomain + '/img/illustration/messenger.svg'" alt="SWIFT Viber">
                <div class="swift-widget_text">
                    {{__("We are also on Messenger...")}}
                </div>
                <div class="swift-widget_button button mod-blue" @click="startMessenger">{{ __("Write in Messenger") }}</div>
            </div>
            <lower-section active="messenger"></lower-section>
        </div>
    </section>
</template>

<style lang='scss' scoped>
    @import '../common-styles';
    @import 'messenger';
</style>

<script src="./messenger.js"></script>

