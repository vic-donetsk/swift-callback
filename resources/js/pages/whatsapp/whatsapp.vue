<template>
    <section class="swift-widget">
        <div class="swift-widget_block">
            <div class="swift-widget_upper-section">
                <exit-block page="whatsapp"></exit-block>
                <img class="swift-widget_img" src="img/illustration/whatsapp.svg" alt="SWIFT Viber">
                <div class="swift-widget_text">
                    {{__("We are also on WhatsApp...")}}
                </div>
                <div class="swift-widget_button button mod-blue" @click="startWhatsapp">{{ __("Write in WhatsApp") }}</div>
            </div>
            <lower-section active="whatsapp"></lower-section>

        </div>
    </section>
</template>

<style lang='scss' scoped>
    @import 'whatsapp';
    @import '../common-styles';
</style>

<script src="./whatsapp.js"></script>
