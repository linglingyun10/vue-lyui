<template>
  <Responsive :breakpoints="{
    small: el => el.width <= 500
  }">
    <div slot-scope="el" :class="['post__item', { small: el.is.small }]">
      <img class="post__image" :src="post.image" />
      <div class="post__text">{{post.text}}</div>
    </div>
  </Responsive>
</template>

<script>
import { Responsive } from "vue-responsive-components"
export default {
  props: ['post'],
  components: { Responsive }
}
</script>

<style lang="scss">
.post__item {
  display: flex;
}
.post__image {
  flex: 0 0 200px;
  height: 200px;
}
.post__item.small {
  flex-direction: column;
  
  .post__image {
    flex: 0 auto;
    height: auto;
  }
}
</style>
