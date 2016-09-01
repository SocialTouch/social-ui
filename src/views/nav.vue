<template>
	<div class="demo-drawer-container">

		<soc-sidebar :sidebar="nav.sidebar"></soc-sidebar>

	</div>
</template>

<script>
	//sidebar
	import socSidebar from './sidebar.vue'

	export default {
		components: {
			socSidebar
		},
		props: ['nav'],
        methods: {
        	
        }
	}

</script>