<template>
    <section class="swift-widget">
        <div class="swift-widget_block">
            <div class="swift-widget_upper-section">
                <exit-block page="viber"></exit-block>
                <img class="swift-widget_img" :src="$imgDomain + '/img/illustration/viber.svg'" alt="SWIFT Viber">
                <div class="swift-widget_text">
                    {{__("We are also on Viber...")}}
                </div>
                <div class="swift-widget_button button mod-blue" @click="startViber">{{ __("Write in Viber") }}</div>
            </div>
            <lower-section active="viber"></lower-section>

        </div>
    </section>
</template>

<style lang='scss' scoped>
    @import '../common-styles';
    @import 'viber';
</style>

<script src="./viber.js"></script>
