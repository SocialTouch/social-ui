<template>
	<div class="demo-drawer-trigger" @click.stop>
		<span><i type="bars" class="anticon anticon-bars" @click="opened"></i></span>
	</div>
</template>

<script>

	export default {
		methods: {
			opened (){
				this.$dispatch('navOpen')
			}
		}
	}

</script>