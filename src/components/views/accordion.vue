<template>

	<div class="am-accordion">
		<div class="am-accordion-item" :class="show?'am-accordion-item-active':''">
			<div class="am-accordion-header" @click="opend" :aria-expanded="show?'true':'false'">
				<i class="arrow"></i>
				{{header}}
			</div>
			<div class="am-accordion-content" 
				:class="show?'am-accordion-content-active':'am-accordion-content-inactive'"
				>
				<div class="am-accordion-content-box">
					<div class="am-list-item am-list-item-middle" 
						 v-for="item in option" 
						 @click="changed(item)">
						 <div class="am-list-line">
							 <div class="am-list-content">{{item.name}}</div>
						 </div>
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
			activekey: {
				type: String,
				default: '0'
			},
			header: {
				type: String,
				default: '标题文字'
			},
			option: {
	      		type: Array
		    },
		},
		methods: {
			opend () {
				this.show=!this.show
			},
			changed (item) {
				this.$emit('onchange', item)
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