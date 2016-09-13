<template>

	<div style="height: 100%;">
		<div class="demoName">
			<p>ActionSheet</p>
		</div>
		<div class="demo-preview-item" id="action-sheet-demo-0">
			<div class="demoTitle">基本</div>
			<div style="margin: 0px 15px;">
				<div style="margin: 15px 0px;" v-for="item in list">
					<button type="button" class="am-button am-button-ghost" @click="opend(item)">
						<span>{{item}}</span>
					</button>
				</div>
			</div>
		</div>
	</div>

	<soc-actionsheet 
		:message="actionsheet.title"
		:show="actionsheet.show">
	</soc-actionsheet>

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
					message: '1111',
					show: false
				}
			}
		},
		methods: {
			opend ( obj ) {
				this.actionsheet.show = true
			}
		}
	}
</script>