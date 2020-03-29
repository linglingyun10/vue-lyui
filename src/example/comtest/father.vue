<template>
  <div>
<todo-list v-slot:'todo'>test</todo-list>
<todo-list v-slot:[dynamicSlotName]>test</todo-list>
  </div>
</template>
<!--v-slot:{dynamicSlotName}-->
<script>
  import TodoList from './children.vue'
  export default {
    name: 'todolist',
    data () {
      return {
        dynamicSlotName: 'todo'
      }
    },
    components: {
      'todo-list': TodoList
    }
  }
</script>

<style>
</style>