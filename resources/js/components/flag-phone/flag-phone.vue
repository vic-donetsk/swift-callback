<template>
    <div class="swift-widget_flagPhone">
        <label for="select" class="swift-widget_flagPhone-select">
            <input type="radio" name="list" value="not_changed" id="bg" checked />
            <label class="bg" for="bg"><img src="img/flags/moldova.svg" alt=""></label>
            <input type="radio" name="list" value="not_changed" id="select">
            <div class="items">
                <input type="radio" name="list" value="1" id="1" v-model="selected" @change="flagSelected">
                <label for="1"><img src="img/flags/moldova.svg" alt="" ></label>
                <input type="radio" name="list" value="2" id="2" v-model="selected" @change="flagSelected">
                <label for="2"><img src="img/flags/star-left.svg" alt=""></label>
                <input type="radio" name="list" value="3" id="3" v-model="selected" @change="flagSelected">
                <label for="3"><img src="img/flags/star-right.svg" alt=""></label>
            </div>
        </label>
        <masked-input class="swift-widget_flagPhone-input"
                      v-model="clientPhone"
                      :mask="currentMask"
                      :placeholder='__("Leave a number")'
                      placeholder-char="*"
                      @blur="getPhone"
        />
    </div>
</template>

<style lang='scss' scoped>
    @import 'flag-phone';
</style>

<script src="./flag-phone.js"></script>