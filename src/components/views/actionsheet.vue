<template>
	
	<div>
		<div v-if="show" data-vueroot="{{show}}">

			<soc-mask :show.sync="show"></soc-mask>

			<div class="am-action-sheet-wrap" v-el:socwrap>

				<div class="am-action-sheet am-action-sheet-normal">
					<div>
						<h3 class="am-action-sheet-title" v-if="title!=''">{{title}}</h3>
						<div class="am-action-sheet-message">{{message}}</div>

						<ul class="am-action-sheet-button-list">
							<li class="am-action-sheet-button-list-item">操作 0</li>
							<li class="am-action-sheet-destructive-button">删除</li>
							<li class="am-action-sheet-cancel-button">
								取消
								<span class="am-action-sheet-cancel-button-mask"></span>
							</li>
						</ul>

						<div class="am-action-sheet-share">
							
							<div class="am-action-sheet-share-cancel-button">取消</div>
						</div>
						
					</div>
				</div>

			</div>
			
		</div>
	</div>

</template>

<script>

	import socMask from '../global/mask.vue'

	export default {
		components: {
			socMask
		},
		props: {
			title: {
				type: String,
				default: ''
			},
			message: {
				type: String,
				default: '我是描述'
			},
			show: {
				type: Boolean,
				default: false
			}
		},
		ready () {
	      document.addEventListener('click', this.maskClose)
	    },
	    destroy () {
	      document.removeEventListener('click', this.maskClose)
	    },
	    watch: {
	    	'show' (val,oldval) {
	    		if ( val ) {
	    			document.body.style.overflow = 'hidden'
	    		} else {
	    			document.body.style.overflow = ''
	    		}
	    	}
	    },
		methods: {
			onChange ( obj ) {
				console.log(obj)
			},
			maskClose (e) {
				( e.target == this.$els.socwrap)?this.show = false:this.show = true
			}
		}
	}
</script>