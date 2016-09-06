<template>
	
	<div style="height: 100%;">
		<div class="demoName">手风琴<p>Accordion</p></div>
		<div class="demoLinks">
			<ul>
				<li><a href="javascript:;">基本</a></li>
				<li><a href="javascript:;">手风琴模式</a></li>
			</ul>
		</div>
		<div class="demo-preview-item" id="accordion-demo-0" name="accordion-demo-0">
			<div>
				<div class="am-accordion">
					<soc-accordion
						:show.sync="accordion.show"
						:option="accordion.option">
						
					</soc-accordion>
				</div>
			</div>
		</div>
	</div>

</template>

<script>

	import {
	    socAccordion,
	} from '../../../src/components/index'

	export default {
		components: {
			socAccordion
		},
		data () {
			return {
				urlpath: '',
				accordion: {
					show:false,
					option:['1','2','3']
				}
			}
		},
		// route: {
		// 	data (transition) {
		// 		const urlpath = transition.to.path
		// 		this.urlpath = urlpath +'/#accordion-demo-0'
		// 	}
		// },
	}
</script>