<template>
    <section class="swift-widget">
        <div class="swift-widget_block">
            <div class="swift-widget_exit" @click="exit">
                <span class="swift-widget_exit-text">{{ __("Close") }}</span>

                <svg class="swift-widget_exit-cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.065 12.776">
                    <g id="_2" data-name="2" transform="translate(-1813.348 -93.159)">
                        <line id="Line_16" data-name="Line 16" x1="9.239" y2="9.95" transform="translate(1814.761 94.572)" fill="none" stroke="#c5daf7" stroke-linecap="round" stroke-width="2"/>
                        <line id="Line_15" data-name="Line 15" x2="9.239" y2="9.95" transform="translate(1814.761 94.572)" fill="none" stroke="#c5daf7" stroke-linecap="round" stroke-width="2"/>
                    </g>
                </svg>
            </div>
            <div class="swift-widget_rating-text">{{ __("Appreciate the conversation") }}</div>

            <div class="swift-widget_rating">

                <form action="">
                    <input class="star star-5" id="star-5" type="radio" name="star"/>
                    <label class="star star-5" for="star-5"></label>
                    <input class="star star-4" id="star-4" type="radio" name="star"/>
                    <label class="star star-4" for="star-4"></label>
                    <input class="star star-3" id="star-3" type="radio" name="star"/>
                    <label class="star star-3" for="star-3"></label>
                    <input class="star star-2" id="star-2" type="radio" name="star"/>
                    <label class="star star-2" for="star-2"></label>
                    <input class="star star-1" id="star-1" type="radio" name="star"/>
                    <label class="star star-1" for="star-1"></label>
                </form>

                <!--<input class="star" id="star-5-right" type="radio" v-model="starRating" value="10"/>-->
                <!--<label class="star-right" for="star-5-right">-->
                    <!--<svg class="svg-icon" viewBox="0 0 22.112 42.059">-->
                        <!--<use xlink:href="#star-right"/>-->
                    <!--</svg>-->
                <!--</label>-->
                <!--<input class="star" id="star-5-left" type="radio" v-model="starRating" value="9"/>-->
                <!--<label class="star-left" for="star-5-left">-->
                    <!--<svg class="svg-icon" viewBox="0 0 22.112 42.059">-->
                        <!--<use xlink:href="#star-left"/>-->
                    <!--</svg>-->
                <!--</label>-->

                <!--<input class="star" id="star-4-right" type="radio" v-model="starRating" value="8"/>-->
                <!--<label class="star-right" for="star-4-right">-->
                    <!--<svg class="svg-icon" viewBox="0 0 22.112 42.059">-->
                        <!--<use xlink:href="#star-right"/>-->
                    <!--</svg>-->
                <!--</label>-->
                <!--<input class="star" id="star-4-left" type="radio" v-model="starRating" value="7"/>-->
                <!--<label class="star-left" for="star-4-left">-->
                    <!--<svg class="svg-icon" viewBox="0 0 22.112 42.059">-->
                        <!--<use xlink:href="#star-left"/>-->
                    <!--</svg>-->
                <!--</label>-->

                <!--<input class="star" id="star-3-right" type="radio" v-model="starRating" value="6"/>-->
                <!--<label class="star-right" for="star-3-right">-->
                    <!--<svg class="svg-icon" viewBox="0 0 22.112 42.059">-->
                        <!--<use xlink:href="#star-right"/>-->
                    <!--</svg>-->
                <!--</label>-->
                <!--<input class="star" id="star-3-left" type="radio" v-model="starRating" value="5"/>-->
                <!--<label class="star-left" for="star-3-left">-->
                    <!--<svg class="svg-icon" viewBox="0 0 22.112 42.059">-->
                        <!--<use xlink:href="#star-left"/>-->
                    <!--</svg>-->
                <!--</label>-->

                <!--<input class="star" id="star-2-right" type="radio" v-model="starRating" value="4"/>-->
                <!--<label class="star-right" for="star-2-right">-->
                    <!--<svg class="svg-icon" viewBox="0 0 22.112 42.059">-->
                        <!--<use xlink:href="#star-right"/>-->
                    <!--</svg>-->
                <!--</label>-->
                <!--<input class="star" id="star-2-left" type="radio" v-model="starRating" value="3"/>-->
                <!--<label class="star-left" for="star-2-left">-->
                    <!--<svg class="svg-icon" viewBox="0 0 22.112 42.059">-->
                        <!--<use xlink:href="#star-left"/>-->
                    <!--</svg>-->
                <!--</label>-->

                <!--<input class="star" id="star-1-right" type="radio" v-model="starRating" value="2"/>-->
                <!--<label class="star-right" for="star-1-right">-->
                    <!--<svg class="svg-icon" viewBox="0 0 22.112 42.059">-->
                        <!--<use xlink:href="#star-right"/>-->
                    <!--</svg>-->
                <!--</label>-->
                <!--<input class="star" id="star-1-left" type="radio" v-model="starRating" value="1"/>-->
                <!--<label class="star-left" for="star-1-left">-->
                    <!--<svg class="svg-icon" viewBox="0 0 22.112 42.059">-->
                        <!--<use xlink:href="#star-left"/>-->
                    <!--</svg>-->
                <!--</label>-->

            </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" width="22.112" height="42.059"
             viewBox="0 0 22.112 42.059"
             style="display:none">
            <symbol id="star-right">
                <path id="Path_213" data-name="Path 213"
                      d="M272.752,28.335l-14.646-3.091L250.64,12.27V48.22l13.665,6.108-1.586-14.885Z"
                      transform="translate(-250.64 -12.27)"/>
            </symbol>
            <symbol id="star-left">
                <path id="Path_214" data-name="Path 214"
                      d="M14.646,25.244,0,28.335,10.033,39.444,8.446,54.328,22.112,48.22V12.27Z"
                      transform="translate(0 -12.27)"/>
            </symbol>
        </svg>
    </section>
</template>

<style lang='scss' scoped>
    @import '../common-styles';
    @import 'rating';
</style>

<script src="./rating.js"></script>
