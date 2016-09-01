<template>
	<div id="social">
		<div>
			<soc-header></soc-header>
		</div>
	</div>
</template>
	
<script>
	//socialUI 组件库
	import '../components/index'

	//header
	import socHeader from './header.vue'

	export default {
		components: {
			socHeader
		}
	}

</script>
<style src="../assets/styles/common.css">

</style>