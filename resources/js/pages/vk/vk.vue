<template>
    <section class="swift-widget">
        <div class="swift-widget_block">
            <div class="swift-widget_upper-section">
                <exit-block page="vk"></exit-block>
                <img class="swift-widget_img" :src="$imgDomain + '/img/illustration/vk.svg'" alt="SWIFT Viber">
                <div class="swift-widget_text">
                    {{__("We are also on VKontakte...")}}
                </div>
                <div class="swift-widget_button button mod-blue" @click="startVK">{{ __("Write in VKontakte") }}</div>
            </div>
            <lower-section active="vk"></lower-section>
        </div>
    </section>
</template>

<style lang='scss' scoped>
    @import '../common-styles';
    @import 'vk';
</style>

<script src="./vk.js"></script>
