<template>
  <div>
     <ly-keyboard v-model="show1" :callback="done1" ref="kbdemo1"></ly-keyboard>
     <ly-keyboard v-model="show2" :callback="done2" disorder ref="kbdemo2"></ly-keyboard>
       <ly-button type="primary"  @click.native="show1 = true">primary</ly-button>
         <ly-button type="primary">primary</ly-button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        show1: false,
        show2: false
      }
    },
    methods: {
     done1(val) {
          console.log('输入的密码是：' + val);
//        this.$dialog.loading.open('验证支付密码');
          setTimeout(() => {
              this.$refs.kbdemo1.$emit('ydui.keyboard.error', '对不起，您的支付密码不正确，请重新输入。');
              this.$dialog.loading.close();
          }, 2000);
      },
      done2(val) {
          console.log('输入的密码是：' + val + ' - 无序');
//        alert('验证支付密码')
//        this.$dialog.loading.open('验证支付密码');

          setTimeout(() => {
              this.$refs.kbdemo2.$emit('ydui.keyboard.error', '对不起，您的支付密码不正确，请重新输入。');
//            this.$dialog.loading.close();
          }, 2000);
      }
    }
  }
</script>
<style>
</style>