<template>
	<div class="am-drawer-content">
		<section class="am-demo-page">
			<div class="am-demo-hd">
				<div class="logo" style="background-image: url(&quot;http://static.biz.social-touch.com/mmp/img/modules/login/logo.png&quot;);"></div>
				<h1 class="am-demo-title">Social FE Mobile</h1>
				<h2 class="am-demo-subtitle">时趣互动前端Vue组件</h2>
			</div>

			<div class="am-demo-bd">

				<soc-list :viewsdata="listData"></soc-list>

			</div>
		</section>
	</div>
</template>

<script>
	//components list
	import socList from '../components/list.vue'

	//数据集
	import listData from '../mock/views-data'

	export default {
		data () {
			return {
				listData:listData
			}
		},
		components: {
			socList,
		},
        methods: {
        	
        }
	}

</script>