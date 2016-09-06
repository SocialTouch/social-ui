<template>
	
	<div style="height: 100%;">
		<div class="demoName">手风琴<p>Accordion</p></div>
		<div class="demoLinks">
			<ul>
				<li><a href="javascript:;">基本</a></li>
				<li><a href="javascript:;">手风琴模式</a></li>
			</ul>
		</div>
		<div class="demo-preview-item" id="accordion-demo-0" v-for="item in option">
			<div class="demoTitle">{{item.name}}</div>
			<div>
				<soc-accordion 
					v-for="li in item.child" 
					:active.sync="li.active"
					:header="li.header"
					:option="li.child"
					:activekey="li.activeKey"
					@onchange="onChange"
					>
				</soc-accordion>
			</div>
		</div>
	</div>

</template>

<script>

	//数据
	import listData from './data'

	import {
	    socAccordion,
	} from '../../../../src/components/index'

	export default {
		components: {
			socAccordion
		},
		data () {
			return {
				option: listData
			}
		},
		methods: {
			onChange ( obj ) {
				console.log(obj)
			}
		}
	}
</script>