<template>
	<div class="demo-drawer-container">

		<soc-sidebar :sidebar="nav.sidebar"></soc-sidebar>

		<soc-content></soc-content>

	</div>
</template>

<script>
	//sidebar
	import socSidebar from './sidebar.vue'
	//content
	import socContent from './content.vue'

	export default {
		components: {
			socSidebar,
			socContent
		},
		props: ['nav'],
        methods: {
        	
        }
	}

</script>