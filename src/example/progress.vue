<template>
  <div>
    <ly-progress :percent="25" />
    <ly-progress :percent="45" status="active" />
    <ly-progress :percent="65" status="wrong" />
    <ly-progress :percent="100" />
    <ly-progress :percent="25" hide-info />
  </div>
</template>
<script>
    export default {
        
    }
</script>
<style>
</style>