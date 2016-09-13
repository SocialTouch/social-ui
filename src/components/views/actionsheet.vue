<template>
	
	<div>
		<div v-if="show" data-vueroot="{{show}}">

			<soc-mask :show.sync="show"></soc-mask>

			<div class="am-action-sheet-wrap" v-el:socwrap>

				<div class="am-action-sheet am-action-sheet-normal">
					<div>
						<h3 class="am-action-sheet-title" v-if="title!=''">{{title}}</h3>
						<div class="am-action-sheet-message">{{message}}</div>

						<ul class="am-action-sheet-button-list" v-if="type=='default'">
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