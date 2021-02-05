<template>
	<div id="app">
	<router-view />
	</div>
</template>

<script lang="ts">

// import { defineComponent } from 'vue';
// import {useStore} from 'vuex'
// import {useRoute} from "vue-router";
// 菜单
// import { menuHeader, menuAside } from '@/menu'
// <!--import { useStore } from 'vuex';-->


// export default defineComponent({
//   name:'App',
//   setup() {
//     // const store = useStore()
//     console.log("a")
//   }
// })

// import Vue from 'vue'
// import Component from 'vue-class-component'
import {Component,Vue} from 'vue-property-decorator'
@Component
export default class App extends Vue {
  created(){
    console.log('a')
  }
}
</script>









<style lang="scss">
@import '~@/assets/style/public-class.scss';
</style>
