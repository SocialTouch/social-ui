<template>
	
	<div class="am-action-sheet-mask" v-show="active"></div>

</template>

<script>
	export default {
		props: {
			active: {
				twoWay: true,
				type: Boolean
			}
		}
	}
</script>