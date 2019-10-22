<template>
    <div class="swift-widget_flagPhone">
        <label for="select" class="swift-widget_flagPhone-select">
            <input type="radio" name="list" value="not_changed" id="bg" checked />
            <label class="bg" for="bg"><img src="img/flags/moldova.svg" alt=""></label>
            <input type="radio" name="list" value="not_changed" id="select">
            <div class="items">
                <div v-if="countriesPhones.length"  v-for="item in countriesPhones">
                    <input type="radio" name="list" :value="item.id" :id="item.id" v-model="selected" @change="flagSelected">
                    <label :for="item.id"><img :src="item.img" alt="tel" ></label>
                </div>
            </div>
        </label>
        <masked-input class="swift-widget_flagPhone-input"
                      v-model="clientPhone"
                      :mask="currentMask"
                      :placeholder='__("Leave a number")'
                      placeholder-char="*"
                      @input="updatePhone"
        />
    </div>
</template>

<style lang='scss' scoped>
    @import 'flag-phone';
</style>

<script src="./flag-phone.js"></script>