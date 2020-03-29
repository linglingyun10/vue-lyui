<template>
  <div>
    <div>
      <i slot="icon" class="demo-icons-phone"></i>
      <ly-input v-model="value" placeholder="请输入手机号码"  style="width: 30%;"/>
      <!--<input type="text"cplaceholder="请输入手机号码">-->

      <!-- ↓↓关键代码是这里↓↓ -->
      <ly-sendcode slot="right" v-model="start1" @click.native="sendCode" type="warning"></ly-sendcode>
                <!-- ↑↑关键代码是这里↑↑ -->
    </div>
    <div>
      <ly-button-group>
        <ly-sendcode
            v-model="start2"
            @click.native="start2 = true"
            second="15"
            runStr="在{%s}秒后你就可以重新获取啦"
            resetStr="你可以重新获取验证码啦"
            size="large"
            type="primary"
        ></ly-sendcode>
      </ly-button-group>
    </div>
    <div>
      <ly-button-group>
        <ly-sendcode
            v-model="start3"
            storageKey="dashuaibi" 
            @click.native="start3 = true"
            size="large"
            type="danger"
            initStr="刷新页面倒计时还会继续"
        ></ly-sendcode>
       </ly-button-group>
    </div>
  </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                start1: false,
                start2: false,
                start3: false,
                value: ''
            }
        },
        methods: {
            sendCode() {
//              this.$dialog.loading.open('发送中...');
                alert('发送中...')
                setTimeout(() => {

                    this.start1 = true;
                    alert('已发送')
//                  this.$dialog.loading.close();

//                  this.$dialog.toast({
//                      mes: '已发送',
//                      icon: 'success',
//                      timeout: 1500
//                  });

                }, 1000);
            }
        }
    }
</script>
