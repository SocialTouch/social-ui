<template>
	
	<div style="height: 100%;">
		<div class="demoName">手风琴<p>Accordion</p></div>
		<div class="demoLinks">
			<ul>
				<li><a href="http://mobile.ant.design/kitchen-sink/accordion/#accordion-demo-0">基本</a></li>
				<li><a href="http://mobile.ant.design/kitchen-sink/accordion/#accordion-demo-1">手风琴模式</a></li>
			</ul>

			<com-accordion></com-accordion>

		</div>
	</div>

</template>

<script>

import {
    comAccordion,
} from '../../../src/components/index'

export default {
	components: {
		comAccordion
	}
}
</script>