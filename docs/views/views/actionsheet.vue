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
						<span>{{item.name}}</span>
					</button>
					
				</div>
			</div>
		</div>
	</div>

	<soc-actionsheet 
		:type="actionsheet.type"
		:title="actionsheet.title"
		:message="actionsheet.message"
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
				list: [
					{name:'默认状态操作列表',type:'default',message: '我是描述我是描述',show: false,title:'我是标题',
						options:[
							{name:'操作0'},
							{name:'操作1'}
						]
					},
					{name:'带分享功能的操作列表',type:'share',message: '我是描述我是描述',show: false,title:'我是标题',
						options:[
							{name:'操作0'},
							{name:'操作1'}
						]
					},
					{name:'带多行按钮的分享功能操作列表',type:'share',message: '我是描述我是描述',show: false,title:'我是标题',
						options:[
							{name:'操作0'},
							{name:'操作1'}
						]
					}
				],
				actionsheet: {}
			}
		},
		methods: {
			opend ( obj ) {
				this.actionsheet = obj
			}
		}
	}
</script>