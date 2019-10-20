<template>
    <section class="swift-widget">
        <div class="swift-widget_block" >
            <div class="swift-widget_upper-section" v-if="status != 3">
                <div class="swift-widget_exit">
                    <div class="swift-widget_exit-left">
                        <svg class="swift-widget_arrow" @click="backTo" xmlns="http://www.w3.org/2000/svg"
                             width="13.883"
                             height="11.531" viewBox="0 0 13.883 11.531">
                            <g id="left-arrow" transform="translate(0 -41.674)">
                                <g id="Group_314" data-name="Group 314" transform="translate(0 41.674)">
                                    <path id="Path_1550" data-name="Path 1550"
                                          d="M13.1,46.351l.022,0H3.834l2.92-2.927a.767.767,0,0,0,0-1.078L6.3,41.9a.76.76,0,0,0-1.073,0L.221,46.9a.765.765,0,0,0,0,1.077l5.006,5.006a.761.761,0,0,0,1.073,0l.454-.455a.752.752,0,0,0,.221-.536.729.729,0,0,0-.221-.526L3.8,48.523h9.311a.787.787,0,0,0,.77-.779V47.1A.772.772,0,0,0,13.1,46.351Z"
                                          transform="translate(0 -41.674)" fill="#c5daf7"/>
                                </g>
                            </g>
                        </svg>
                        <span @click="backTo">{{ __("Back") }}</span>
                    </div>
                    <div class="swift-widget_exit-right">
                        <span @click="exit">{{ __("Close") }}</span>
                        <svg class="swift-widget_cross" @click="exit" xmlns="http://www.w3.org/2000/svg" width="14.483"
                             height="14.483"
                             viewBox="0 0 14.483 14.483">
                            <path id="Path_663" data-name="Path 663"
                                  d="M13.994,2.854,9.605,7.243l4.388,4.389A1.671,1.671,0,1,1,11.631,14L7.241,9.607,2.852,14A1.671,1.671,0,0,1,.49,11.632L4.878,7.243.489,2.854A1.671,1.671,0,0,1,2.852.491L7.241,4.88,11.63.491a1.671,1.671,0,0,1,2.363,2.364Z"
                                  transform="translate(0.001 -0.002)" fill="#c5daf7"/>
                        </svg>
                    </div>
                </div>
                <img class="swift-widget_img" src="img/illustration/select-time.svg" alt="SWIFT Call">
                <div class="swift-widget_text">
                    {{__("Choose an hour that suits you and us we call as soon as possible")}}
                </div>

                <div class="swift-widget_selection-wrapper">
                    <div class="swift-widget_selection-block">

                        <div class="swift-widget_time-setup" v-if="status == 1">
                            <img src="/img/angle-up.svg" @click="plusHour" alt="swift">
                            <input type="number" :value="hours">
                            <img src="/img/angle-down.svg" @click="minusHour" alt="swift">
                        </div>
                        <div class="swift-widget_time-setup" v-if="status == 1">
                            :
                        </div>
                        <div class="swift-widget_time-setup" v-if="status == 1">
                            <img src="/img/angle-up.svg" @click="plusMinute " alt="swift">
                            <input type="number" :value="minutes">
                            <img src="/img/angle-down.svg" @click="minusMinute" alt="swift">
                        </div>

                        <div class="swift-widget_time-setup" v-if="status == 2">
                            <img src="/img/angle-up.svg" @click="plusDay" alt="swift">
                            <div class="swift-widget_selection-day">{{day}}</div>
                            <div class="swift-widget_selection-date">({{date}})</div>

                            <img src="/img/angle-down.svg" @click="minusDay" alt="swift">
                        </div>

                    </div>

                    <div class="swift-widget_selection-buttons">
                        <div class="swift-widget_selection-button mod_cancel" @click="cancel">{{__("Cancel")}}</div>
                        <div class="swift-widget_selection-button mod_select" @click="select">{{__("Select")}}</div>
                    </div>
                </div>
            </div>

            <lower-section v-if="status != 3"></lower-section>

            <div class="swift-widget_upper-section" v-if="status == 3">
                <div class="swift-widget_exit-ok">
                    <span @click="exit">{{ __("Close") }}</span>
                    <svg class="swift-widget_cross" @click="exit" xmlns="http://www.w3.org/2000/svg" width="14.483"
                         height="14.483"
                         viewBox="0 0 14.483 14.483">
                        <path id="Path_663" data-name="Path 663"
                              d="M13.994,2.854,9.605,7.243l4.388,4.389A1.671,1.671,0,1,1,11.631,14L7.241,9.607,2.852,14A1.671,1.671,0,0,1,.49,11.632L4.878,7.243.489,2.854A1.671,1.671,0,0,1,2.852.491L7.241,4.88,11.63.491a1.671,1.671,0,0,1,2.363,2.364Z"
                              transform="translate(0.001 -0.002)" fill="#c5daf7"/>
                    </svg>
                </div>
                <img class="swift-widget_img-ok" src="img/illustration/ok-icon.svg" alt="SWIFT OK">
                <div class="swift-widget_text">
                    {{__("You commanded a call")}}
                    {{approvedDate}}
                    {{__("at")}}
                    {{approvedTime}}
                </div>
                <div class="swift-widget_button-back button mod-blue" @click="backTo">{{ __("Back") }}</div>
            </div>
        </div>
    </section>
</template>

<style lang='scss' scoped>
    @import 'choose-time';
</style>

<script src="./choose-time.js"></script>
