<template>
   <ul class="dn-game-panel__list">
     <slot></slot>
   </ul>
</template>

<script>
  export default {
    name: 'ly-infolist',
    props: {
    },
    filters: {
      imgURL: function(path, size) {
        return '//img2.tgbus.com/i/' + size + path;
      },
      capitalize: function(value) {
        if (!value) {
          return '';
        } else {
          value = value.toString();
          return value.replace(/&(nbsp);/ig, '');
        }
      }
    }
  }
</script>

<style>
</style>