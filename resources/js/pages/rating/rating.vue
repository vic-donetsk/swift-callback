<template>
    <section class="swift-widget">
        <div class="swift-widget_block">
            <div class="swift-widget_exit">
                <span class="swift-widget_exit-text" @click="exit">{{ __("Close") }}</span>
                <svg class="swift-widget_exit-cross" @click="exit" xmlns="http://www.w3.org/2000/svg" width="14.483"
                     height="14.483"
                     viewBox="0 0 14.483 14.483">
                    <path id="Path_663" data-name="Path 663"
                          d="M13.994,2.854,9.605,7.243l4.388,4.389A1.671,1.671,0,1,1,11.631,14L7.241,9.607,2.852,14A1.671,1.671,0,0,1,.49,11.632L4.878,7.243.489,2.854A1.671,1.671,0,0,1,2.852.491L7.241,4.88,11.63.491a1.671,1.671,0,0,1,2.363,2.364Z"
                          transform="translate(0.001 -0.002)" fill="#c5daf7"/>
                </svg>
            </div>
            <div class="swift-widget_rating-text">{{ __("Appreciate the conversation") }}</div>

            <div class="swift-widget_rating">

                <input class="star" id="star-5-right" type="radio" v-model="starRating" value="10"/>
                <label class="star-right" for="star-5-right">
                    <svg class="svg-icon" viewBox="0 0 22.112 42.059">
                        <use xlink:href="#star-right"/>
                    </svg>
                </label>
                <input class="star" id="star-5-left" type="radio" v-model="starRating" value="9"/>
                <label class="star-left" for="star-5-left">
                    <svg class="svg-icon" viewBox="0 0 22.112 42.059">
                        <use xlink:href="#star-left"/>
                    </svg>
                </label>

                <input class="star" id="star-4-right" type="radio" v-model="starRating" value="8"/>
                <label class="star-right" for="star-4-right">
                    <svg class="svg-icon" viewBox="0 0 22.112 42.059">
                        <use xlink:href="#star-right"/>
                    </svg>
                </label>
                <input class="star" id="star-4-left" type="radio" v-model="starRating" value="7"/>
                <label class="star-left" for="star-4-left">
                    <svg class="svg-icon" viewBox="0 0 22.112 42.059">
                        <use xlink:href="#star-left"/>
                    </svg>
                </label>

                <input class="star" id="star-3-right" type="radio" v-model="starRating" value="6"/>
                <label class="star-right" for="star-3-right">
                    <svg class="svg-icon" viewBox="0 0 22.112 42.059">
                        <use xlink:href="#star-right"/>
                    </svg>
                </label>
                <input class="star" id="star-3-left" type="radio" v-model="starRating" value="5"/>
                <label class="star-left" for="star-3-left">
                    <svg class="svg-icon" viewBox="0 0 22.112 42.059">
                        <use xlink:href="#star-left"/>
                    </svg>
                </label>

                <input class="star" id="star-2-right" type="radio" v-model="starRating" value="4"/>
                <label class="star-right" for="star-2-right">
                    <svg class="svg-icon" viewBox="0 0 22.112 42.059">
                        <use xlink:href="#star-right"/>
                    </svg>
                </label>
                <input class="star" id="star-2-left" type="radio" v-model="starRating" value="3"/>
                <label class="star-left" for="star-2-left">
                    <svg class="svg-icon" viewBox="0 0 22.112 42.059">
                        <use xlink:href="#star-left"/>
                    </svg>
                </label>

                <input class="star" id="star-1-right" type="radio" v-model="starRating" value="2"/>
                <label class="star-right" for="star-1-right">
                    <svg class="svg-icon" viewBox="0 0 22.112 42.059">
                        <use xlink:href="#star-right"/>
                    </svg>
                </label>
                <input class="star" id="star-1-left" type="radio" v-model="starRating" value="1"/>
                <label class="star-left" for="star-1-left">
                    <svg class="svg-icon" viewBox="0 0 22.112 42.059">
                        <use xlink:href="#star-left"/>
                    </svg>
                </label>

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
    @import 'rating';
    @import '../common-styles';
</style>

<script src="./rating.js"></script>
