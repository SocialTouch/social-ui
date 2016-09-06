<template>
	
	<div class="am-accordion-item" :class="show?'am-accordion-item-active':''">
		<div class="am-accordion-header" @click="opend" :aria-expanded="show?'true':'false'">
			<i class="arrow"></i>
			标题文字
		</div>
		<div class="am-accordion-content" 
			:class="show?'am-accordion-content-active':'am-accordion-content-inactive'"
			>
			<div class="am-accordion-content-box">
				<div class="am-list-item am-list-item-middle" 
					v-for="item in option" 
					@click="onChange">
					<div class="am-list-line">
						<div class="am-list-content">{{item}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	
	export default {
		props: {
			show: {
				twoWay: true,
				type: Boolean,
      			default: false
			},
			option: {
		      type: Array
		    },
		},
		methods: {
			opend () {
				this.show=!this.show
			},
			onChange () {

			}
		}
	}

</script>

<style>
	/* 必需 */
	.accordion-content-transition {
	  -webkit-transition: all .2s ease-out;
      transition: all .2s ease-out
	}

</style>