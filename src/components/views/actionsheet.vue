<template>
	
	<div>
		<div v-if="show" data-vueroot="{{show}}">

			<soc-mask :show.sync="show"></soc-mask>

			<div class="am-action-sheet-wrap" v-el:socwrap>

				<div class="am-action-sheet am-action-sheet-normal" v-show="show" transition="actionsheet">
					<div>
						<h3 class="am-action-sheet-title" v-if="title!=''">{{title}}</h3>
						<div class="am-action-sheet-message">{{message}}</div>

						<ul class="am-action-sheet-button-list" 
							v-if="type=='default'">

							<li class="am-action-sheet-button-list-item">操作 0</li>
							<li class="am-action-sheet-destructive-button">删除</li>
							<li class="am-action-sheet-cancel-button">
								取消
								<span class="am-action-sheet-cancel-button-mask"></span>
							</li>
						</ul>

						<div class="am-action-sheet-share" v-else>
							<div class="am-action-sheet-share-list">
								<div class="am-action-sheet-share-list-item">
									<div class="am-action-sheet-share-list-item-icon">
										<i type="mail" class="anticon anticon-mail"></i>
									</div>
									<div class="am-action-sheet-share-list-item-title">发邮件</div>
								</div>
								<div class="am-action-sheet-share-list-item">
									<div class="am-action-sheet-share-list-item-icon">
										<i type="message" class="anticon anticon-message"></i>
									</div>
									<div class="am-action-sheet-share-list-item-title">发短信</div>
								</div>
								<div class="am-action-sheet-share-list-item">
									<div class="am-action-sheet-share-list-item-icon">
										<i type="team" class="anticon anticon-team"></i>
									</div>
									<div class="am-action-sheet-share-list-item-title">发送到群</div>
								</div>
								<div class="am-action-sheet-share-list-item">
									<div class="am-action-sheet-share-list-item-icon">
										<i type="download" class="anticon anticon-download"></i>
									</div>
									<div class="am-action-sheet-share-list-item-title">下载</div>
								</div>
								<div class="am-action-sheet-share-list-item">
									<div class="am-action-sheet-share-list-item-icon">
										<i type="delete" class="anticon anticon-delete"></i>
									</div>
									<div class="am-action-sheet-share-list-item-title">删除</div>
								</div>
								<div class="am-action-sheet-share-list-item">
									<div class="am-action-sheet-share-list-item-icon">
										<i type="ellipsis" class="anticon anticon-ellipsis"></i>
									</div>
									<div class="am-action-sheet-share-list-item-title">更多</div>
								</div>
							</div>
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
			type: {
				type: String,
				default: 'default'
			},
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
	      window.document.body.addEventListener('click', this.maskClose)
	    },
	    destroy () {
	      window.removeEventListener('click', this.maskClose)
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
	    transitions: {
		    'actionsheet': {
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
			onChange ( obj ) {
				console.log(obj)
			},
			maskClose (e) {
				( e.target == this.$els.socwrap )?this.show = false:''
			}
		}
	}
</script>

<style>
	.actionsheet-transition {
		display: block;
		transition: all .3s ease;
  		overflow: hidden
	}	
</style>