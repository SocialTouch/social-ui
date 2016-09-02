<template>
	<div id="social">
		<div>
			<soc-header></soc-header>
			<soc-nav :nav="nav"></soc-nav>
		</div>
	</div>
</template>
	
<script>

	//header
	import socHeader from './components/header.vue'
	//nav
	import socNav from './components/nav.vue'

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
<style src="./assets/styles/kitchen-sink.css"></style>
<style src="./assets/styles/common.css"></style>