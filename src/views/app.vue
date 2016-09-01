<template>
	<div id="social">
		<div>
			<soc-header></soc-header>
			<soc-nav :nav="nav"></soc-nav>
		</div>
	</div>
</template>
	
<script>
	//socialUI 组件库
	import '../components/index'

	//header
	import socHeader from './header.vue'
	//nav
	import socNav from './nav.vue'

	export default {
		data () {
			return {
				nav: {
					sidebar:false
				}
				
			}
		},
		components: {
			socHeader,
			socNav
		},
		events: {
			navOpen () {
				this.nav.sidebar=!this.nav.sidebar
			}
		}
	}

</script>
<style src="../assets/styles/common.css">

</style>