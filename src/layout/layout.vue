<template>
	<div class="yi-layout-group">
        <div class="yi-layout-mask"></div>
        <div class="yi-layout-content">
            <!--顶部-->
            <div class="yi-theme-header">
                <yi-menu-header></yi-menu-header>
            </div>
            <!--主体-->
            <div class="yi-theme-container" style="width: 300px;height: 200px;border:1px solid red;">
                <!--侧边栏-->
                <div class="yi-theme-container-aside"></div>
                <div class="yi-theme-container-main">
                    <router-view />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component,Vue} from 'vue-property-decorator'
import YiMenuHeader from './components/menu-header/index.vue';

@Component({
  components:{YiMenuHeader}
})
export default class Index extends Vue {
  created(){
    console.log('index')
  }
}
</script>

<style lang="scss">
// 注册主题
@import '~@/assets/style/theme/register.scss';
</style>
