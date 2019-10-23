<template>
    <div class="swift-widget_flagPhone">
<!--        <label for="select" class="swift-widget_flagPhone-select">-->
<!--            <input type="radio" name="list" value="not_changed" id="bg" checked />-->
<!--            <label class="bg" for="bg"><img src="img/flags/moldova.svg" alt=""></label>-->
<!--            <input type="radio" name="list" value="not_changed" id="select">-->
<!--            <div class="items">-->
<!--                <div v-if="countriesPhones.length"  v-for="item in countriesPhones">-->
<!--                    <input type="radio" name="list" :value="item.id" :id="item.id" v-model="selected" @change="flagSelected">-->
<!--                    <label :for="item.id"><img :src="item.img" alt="" ></label>-->
<!--                </div>-->
<!--            </div>-->
<!--        </label>-->

        <cool-select
                v-model="selectedTimezone"
                :items="items"
                :placeholder="selectedTimezone ? '' : 'Select timezone'"
                item-value="name"
                item-text="name"
        >
            <!-- slot for each item in the menu -->
            <template slot="item" slot-scope="{ item: timezone }">
                <div style="display: flex; align-items: center;">
                    <img src="/img/moldova.svg" class="country-flag">
<!--                    :src="getFlag(timezone.countryCode)"-->
<!--                    <div>-->
<!--                        {{ timezone.offset }}-->
<!--                        <b>{{ timezone.name }}</b>-->
<!--                    </div>-->
                </div>
            </template>
            <!-- slot for the selected item (in the text field) -->
            <template slot="selection" slot-scope="{ item: timezone }">
                <img src="/img/moldova.svg" class="country-flag">

<!--                <div>-->
<!--                    {{ timezone.offset }}-->
<!--                    <b>{{ timezone.name }}</b>-->
<!--                </div>-->
            </template>
        </cool-select>

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
    @import 'bootstrap.css';
</style>

<script src="./flag-phone.js"></script>