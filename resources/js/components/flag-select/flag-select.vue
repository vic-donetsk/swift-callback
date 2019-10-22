<template>
    <label for="select" class="swift-widget_flagSelect">
        <input type="radio" name="list" value="not_changed" id="bg" checked />
        <label class="bg" for="bg"><img src="img/flags/moldova.svg" alt=""></label>
        <input type="radio" name="list" value="not_changed" id="select">
        <div class="items">
            <input type="radio" name="list" value="first_value" id="list[0]">
            <label for="list[0]"><img src="img/flags/moldova.svg" alt=""></label>
            <input type="radio" name="list" value="second_value" id="list[1]">
            <label for="list[1]"><img src="img/flags/star-left.svg" alt=""></label>
            <input type="radio" name="list" value="third_value" id="list[2]">
            <label for="list[2]"><img src="img/flags/star-right.svg" alt=""></label>
        </div>
    </label>
</template>

<style lang='scss' scoped>
    @import 'flag-select';
</style>

<script src="./flag-select.js"></script>