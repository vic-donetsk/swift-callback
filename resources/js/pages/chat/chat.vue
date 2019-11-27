<template>
    <section class="swift-widget">
        <div class="swift-widget_block">
            <div class="swift-widget_upper-section">
                <div class="swift-widget_chat-header">
                    <div class="swift-widget_chat-header_info">
                        <div class="swift-widget_chat-header_info-img">
                            <img class="swift-widget-img-face" :src="$imgDomain + '/face.svg'" alt="SWIFT">
                        </div>
                        <div class="swift-widget_chat-header_info-person">
                            <div class="person_company">SwiftCallBack</div>
                            <div class="person_position">Manager</div>
                        </div>
                    </div>
                    <div class="swift-widget_close">
                        <svg class="swift-widget_cross" @click="exit" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 20.873 19.708">
                            <g id="cross" transform="translate(-19.35 -35.087)">
                                <line id="Line_149" data-name="Line 149" x2="18.045" y2="16.881"
                                      transform="translate(20.764 36.5)" fill="none" stroke-linecap="round"
                                      stroke-width="2"/>
                                <line id="Line_150" data-name="Line 150" x1="18.045" y2="16.881"
                                      transform="translate(20.764 36.5)" fill="none" stroke-linecap="round"
                                      stroke-width="2"/>
                            </g>
                        </svg>
                    </div>
                </div>
                <div id="swift-widget_scrolling" class="swift-widget_chat-dialog">

                    <div v-if="messages.length"
                         v-for="message in messages">
                        <div class="swift-widget_chat-message"
                             :class="message.isManager ? 'mod_manager-message' : 'mod_client-message'">
                            <div v-if="message.isManager" class="swift-widget_chat-avatar">
                                <img :src="$imgDomain + '/face.svg'" class="avatar_icon" alt="SWIFT">
                            </div>
                            <div class="swift-widget_message-block"
                                 :class="message.isManager ? 'mod_manager' : 'mod_client'">
                                <div class="message-block_text">{{message.text}}</div>
                                <div class="message-block_time">{{ message.time}}</div>
                            </div>
                            <div v-if="!message.isManager" class="swift-widget_chat-avatar">
                                <svg class="avatar_icon" xmlns="http://www.w3.org/2000/svg"
                                     xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 46 46">
                                    <defs>
                                        <clipPath id="clip-path">
                                            <circle id="Ellipse_93" data-name="Ellipse 93" cx="23" cy="23" r="23"
                                                    transform="translate(0 -0.384)" fill="#4c638f" stroke="#707070"
                                                    stroke-width="1"/>
                                        </clipPath>
                                    </defs>
                                    <g id="autentificare" transform="translate(0 0.384)">
                                        <g id="Mask_Group_1" data-name="Mask Group 1" transform="translate(0)"
                                           clip-path="url(#clip-path)">
                                            <g id="user-male-black-shape" transform="translate(3.596 6.419)">
                                                <path id="Path_702" data-name="Path 702"
                                                      d="M31.662,26.791H29.226a4.871,4.871,0,0,1-4.871-4.871V20.355a12.31,12.31,0,0,0,2.331-4.4c.05-.27.31-.4.483-.589a3.011,3.011,0,0,0,.416-3.626c-.1-.17-.267-.317-.257-.528,0-1.428.007-2.859,0-4.286a7.151,7.151,0,0,0-1.739-4.791,6.8,6.8,0,0,0-3.7-1.907,12.27,12.27,0,0,0-5.3.124,6.421,6.421,0,0,0-3.777,2.557,7.381,7.381,0,0,0-1.166,3.858c-.021,1.453,0,2.91-.009,4.367.033.292-.214.489-.326.73A3.019,3.019,0,0,0,12,15.559a1.427,1.427,0,0,1,.416.815,11.785,11.785,0,0,0,2.2,3.929V21.92a4.871,4.871,0,0,1-4.871,4.871H7.307S2.892,28.008,0,34.1v2.436a2.434,2.434,0,0,0,2.436,2.435h34.1a2.434,2.434,0,0,0,2.435-2.435V34.1C36.076,28.009,31.662,26.791,31.662,26.791Z"
                                                      transform="translate(0 0)" fill="#4c638f"/>
                                            </g>
                                        </g>
                                        <g id="Ellipse_92" data-name="Ellipse 92" transform="translate(0 -0.384)"
                                           fill="none" stroke="#e7f4fb" stroke-width="1">
                                            <circle cx="23" cy="23" r="23" stroke="none"/>
                                            <circle cx="23" cy="23" r="22.5" fill="none"/>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="swift-widget_chat-newMessage">
                    <input class="chat-newMessage_text"
                           placeholder="Scrie un mesaj…"
                           v-model="currentMessage"
                           @keyup="handleEnter">
                    <img :src="$imgDomain + '/send_button.svg'" class="chat-newMessage_send" @click="send" alt="send">
                </div>

            </div>
            <lower-section active="chat"></lower-section>

        </div>
    </section>
</template>

<style lang='scss' scoped>
    @import '../common-styles';
    @import 'chat';
</style>

<script src="./chat.js"></script>
