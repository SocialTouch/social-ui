<template>
	
	<div class="am-list" v-for="item in viewsdata">
		<div class="am-list-header">{{item.name}}</div>	
		<div class="am-list-body">
			<div class="am-flexbox am-flexbox-wrap am-flexbox-align-middle antm-demo-flex">

				<section v-for="child in item.child" class="am-demo-item" style="width: 250px; height: 250px; display: inline-block;">
					<div class="am-demo-item-inner">
						<a href="/kitchen-sink/accordion/">
							<div class="am-demo-item-logo" style="background-image: url(&quot;https://os.alipayobjects.com/rmsportal/nREwETegxvDndJZ.png&quot;);"></div>
							<h1 class="am-demo-item-title">{{child.name}}</h1>
							<h2 class="am-demo-item-subtitle">{{child.title}}</h2>
						</a>
					</div>
				</section>

			</div>
		</div>
	</div>

</template>

<script>

	export default {
		props:['viewsdata'],
        methods: {
        	
        }
	}

</script>