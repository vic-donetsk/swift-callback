<template>
    <div class="swift-widget_flagPhone">

        <cool-select
                v-model="selectedFlag"
                :items="items"
                :placeholder="selectedFlag ? '' : 'Select country'"
                item-value="name"
                item-text="name"
                @select="setMask(selectedFlag)"
        >
            <!-- slot for each item in the menu -->
            <template slot="item" slot-scope="{ item: country }">
                <div style="display: flex; align-items: center;">
                    <img :src="getFlag(country.iso_code)" class="country-flag">

                </div>
            </template>
            <!-- slot for the selected item (in the text field) -->
            <template slot="selection" slot-scope="{ item: country }">
                <img :src="getFlag(country.iso_code)" class="country-flag">


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