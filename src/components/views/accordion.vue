<template>

	<div class="am-accordion">
		<div class="am-accordion-item" :class="show?'am-accordion-item-active':''">
			<div class="am-accordion-header" @click="opend" :aria-expanded="show?'true':'false'">
				<i class="arrow"></i>
				{{header}}
			</div>
			<div class="am-accordion-content" 
				transition="accordion" v-show="show">
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
		transitions: {
		    'accordion': {
				enter (el) {
					el.style.height = 'auto'
					var endHeight = getComputedStyle(el).height
					el.style.height = '1px'
					el.offsetHeight 
					el.style.height = endHeight;
				},
				afterEnter (el) {
					el.style.height = 'auto'
				},
				beforeLeave (el) {
					el.style.height = getComputedStyle(el).height
					el.offsetHeight 
					el.style.height = '0px'
				}
		    }		    
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
	.accordion-transition {
		display: block;
		transition: all .3s ease;
  		overflow: hidden
	}	
</style>