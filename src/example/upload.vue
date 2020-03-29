<template>
  <div>
   <ly-upload action="//jsonplaceholder.typicode.com/posts/">
        <!--<Button icon="ios-cloud-upload-outline">Upload files</Button>-->
        <ly-button type="primary">Upload files</ly-button>
   </ly-upload>
 <ly-upload
      multiple
      type="drag"
      action="//jsonplaceholder.typicode.com/posts/">
      <div style="padding: 20px 0">
          <ly-icon type="ios-cloud-upload" size="52" style="color: #3399ff"></ly-icon>
          <p>Click or drag files here to upload</p>
      </div>
  </ly-upload>
  </div>
</template>

<script>
</script>

<style>
</style>