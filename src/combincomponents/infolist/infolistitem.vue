<template>
  <li class="dn-game-panel__item">
    <div class="dn-game-panel__card">
      <a class="dn-game-panel__card-link" :href="link" target="_blank">
        <img class="common__shadow dn-game-panel__card-image" :src="imgUrl | imgURL('100_57')" :alt="titleshort"/>
      </a>
    </div>
    <div class="dn-game-panel__card-content">
      <a class="dn-game-panel__card-title" :title="title"  :href="link" target="_blank">
        {{title}}
      </a>
      <a class="dn-game-panel__card-text" :href="link" target="_blank">{{summary}}</a>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'ly-infolistitem',
    props: {
      title: {
        type: String,
        default: ''
      },
      link: {
        type: String,
        default: ''
      },
      titleshort: {
        type: String,
        default: ''
      },
      imgUrl: {
        type: String,
        default: ''
      },
      summary: {
        type: String,
        default: ''
      },
    },
    data () {
      return {
        
      }
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