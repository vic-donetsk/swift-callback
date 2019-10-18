<template>
    <section class="swift-widget">
        <div class="swift-widget_block">
            <div class="swift-widget_upper-section">
                <div class="swift-widget_chat-header">
                    <div class="swift-widget_chat-header_info">
                        <div class="swift-widget_chat-header_info-img">
                            <img class="swift-widget-img-face" src="/img/face.svg" alt="SWIFT">
                        </div>
                        <div class="swift-widget_chat-header_info-person">
                            <div class="person_company">SwiftCallBack</div>
                            <div class="person_position">Manager</div>
                        </div>
                    </div>
                    <div class="swift-widget_close">
                        <svg class="swift-widget_cross" @click="exit" xmlns="http://www.w3.org/2000/svg" width="14.483" height="14.483"
                             viewBox="0 0 14.483 14.483">
                            <path id="Path_663" data-name="Path 663"
                                  d="M13.994,2.854,9.605,7.243l4.388,4.389A1.671,1.671,0,1,1,11.631,14L7.241,9.607,2.852,14A1.671,1.671,0,0,1,.49,11.632L4.878,7.243.489,2.854A1.671,1.671,0,0,1,2.852.491L7.241,4.88,11.63.491a1.671,1.671,0,0,1,2.363,2.364Z"
                                  transform="translate(0.001 -0.002)" fill="#c5daf7"/>
                        </svg>
                    </div>
                </div>
                <div class="swift-widget_chat-dialog">

                </div>
                <div class="swift-widget_chat-newMessage">
                    <textarea class="chat-newMessage_text" placeholder="Scrie un mesaj…" ></textarea>
                    <img src="/img/send_button.svg" class="chat-newMessage_send" alt="send">
                </div>

            </div>
            <lower-section active="chat"></lower-section>

        </div>
    </section>
</template>

<style lang='scss' scoped>
    @import 'chat';
</style>

<script src="./chat.js"></script>
