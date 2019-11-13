<template>
    <div class="swift-widget_exit" @click="exit">
        <span class="swift-widget_exit-text">{{ __("Close") }}</span>
        <svg class="swift-widget_exit-cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.065 12.776">
            <g id="_2" data-name="2" transform="translate(-1813.348 -93.159)">
                <line id="Line_16" data-name="Line 16" x1="9.239" y2="9.95" transform="translate(1814.761 94.572)" fill="none" stroke="#c5daf7" stroke-linecap="round" stroke-width="2"/>
                <line id="Line_15" data-name="Line 15" x2="9.239" y2="9.95" transform="translate(1814.761 94.572)" fill="none" stroke="#c5daf7" stroke-linecap="round" stroke-width="2"/>
            </g>
        </svg>
    </div>
</template>

<style lang='scss' scoped>
    @import 'exit-block';
</style>

<script src="./exit-block.js"></script>