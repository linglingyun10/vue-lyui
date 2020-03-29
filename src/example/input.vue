<template>
   <div>
     <div> <ly-input v-model="value" placeholder="Enter something..." /></div>
    <br>
     <div> <ly-input v-model="value" size="large" placeholder="large size" /></div>
         <br>
    <div><ly-input v-model="value" placeholder="default size" /></div>
    <br>
    <div><ly-input v-model="value" size="small" placeholder="small size" /></div>
    <br>
    <div><ly-input v-model="value" placeholder="Enter something..." clearable style="width: 200px" /></div>
    <br>
    <div><ly-input v-model="value4" icon="ios-clock-outline" placeholder="Enter something..." style="width: 200px"  
      @on-click="showTime(value4)"
      @on-input-change="showChange"
      @input="inputEventTrigger"
      /></div>
      
      <br>
      <div>
         <div>
              Props：
              <ly-input prefix="ios-contact" placeholder="Enter name" style="width: auto" />
              <ly-input suffix="ios-search" placeholder="Enter text" style="width: auto" />
         </div>
         <div style="margin-top: 6px">
              Slots： 
              <ly-input placeholder="Enter name" style="width: auto">
                  <!--<Icon type="ios-contact" slot="prefix" />-->
              </ly-input>
              <ly-input placeholder="Enter text" style="width: auto">
                  <!--<Icon type="ios-search" slot="suffix" />-->
              </ly-input>
         </div>
        
      </div>
      <br>
      <div>
          <ly-input search placeholder="Enter something..." />
          <ly-input search enter-button placeholder="Enter something..." />
          <ly-input search enter-button="Search" placeholder="Enter something..." />
      </div>
   </div>
</template>

<script>
  export default {
      data () {
          return {
              value: '',
              value4: '20:00'
          }
      },
      methods: {
        showTime (val) {
          console.log(val)
        },
        showChange (event) {
          console.log('====showChange==', event.target.value)
        },
        inputEventTrigger () {
          console.log('====inputEventTrigger=', this.value4)
        }
      }
  }
</script>

<style>
</style>