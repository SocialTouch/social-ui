<template>
	
	<div class="am-action-sheet-mask" v-show="show"></div>

</template>

<script>
	export default {
		props: {
			show: {
				twoWay: true,
				type: Boolean,
				default: false
			}
		}
	}
</script>