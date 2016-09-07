<template>

	<div style="height: 100%;">
		<div class="demoName">
			<p>ActionSheet</p>
		</div>
		<div class="demo-preview-item" id="action-sheet-demo-0">
			<div class="demoTitle">基本</div>
			<div style="margin: 0px 15px;">
				<div style="margin: 15px 0px;" v-for="item in list">
					<button type="button" class="am-button am-button-ghost">
						<span>{{item}}</span>
					</button>
				</div>
			</div>
		</div>
	</div>

	<soc-actionsheet 
		:title="actionsheet.title"></soc-actionsheet>

</template>

<script>

	import {
	    socActionsheet,
	} from '../../../src/components/index'

	export default {
		components: {
			socActionsheet
		},
		data () {
			return {
				list: ['默认状态操作列表','带分享功能的操作列表','带多行按钮的分享功能操作列表'],
				actionsheet: {
					title: '1111',
				}
			}
		},
		methods: {
			onChange ( obj ) {

			}
		}
	}
</script>