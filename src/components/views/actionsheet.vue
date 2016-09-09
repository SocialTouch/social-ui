<template>
	
	<div v-show="show">
		<div data-vueroot="{{show}}">

			<soc-mask :show.sync="show"></soc-mask>

			<div tabindex="-1" class="am-action-sheet-wrap" role="dialog">

				<div role="document" class="am-action-sheet am-action-sheet-normal">
					<div>
						<div class="am-action-sheet-message">{{title}}</div>
						<ul class="am-action-sheet-button-list">
							<li class="am-action-sheet-button-list-item">操作 0</li>
							<li class="am-action-sheet-destructive-button">
								<!-- react-text: 16 -->删除<!-- /react-text -->	
							</li>
							<li class="am-action-sheet-cancel-button">
								<!-- react-text: 18 -->取消<!-- /react-text -->
								<span class="am-action-sheet-cancel-button-mask"></span>
							</li>
						</ul>
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
				default: '我是描述'
			},
			show: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			onChange ( obj ) {
				console.log(obj)
			}
		}
	}
</script>