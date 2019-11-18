<template>
    <div class="swift-widget-popup">
        <!--<div class="swift-widget-popup_element"></div>-->

        <component :is="page"></component>
    </div>
</template>

<style lang='scss' scoped>
    @import 'widget-popup';
</style>
<script src="./widget-popup.js"></script>
