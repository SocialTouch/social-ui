<template>
	<div class="am-drawer am-drawer-left" 
	:class="sidebar?'am-drawer-open':''">
		<div class="am-drawer-sidebar" :style="{ transform: style.transformObject }">
			<div>
				<div class="demo-drawer-home">
					<a v-link="{name:'index'}">Social FE Mobile</a>
				</div>

				<div class="am-list" v-for="item in listData">
					<div class="am-list-header">{{item.name}}</div>
					<div class="am-list-body">

						<div class="am-list-item am-list-item-middle" v-for="child in item.child">
							<div class="am-list-line">
								<div class="am-list-content">
									<a v-link="{name:child.url}">
										<span style="font-size: 24px; color: rgb(136, 136, 136);">{{child.name}}</span>
									</a>
								</div>
							</div>
						</div>

					</div>
				</div>


			</div>
		</div>
		<div class="am-drawer-overlay" role="presentation" tabindex="0" :style="{ opacity: style.opacityObject , visibility : style.visibilityObject}"></div>
	</div>
</template>
<script>
	//数据集
	import listData from '../mock/views-data'

	export default {
		data () {
			return {
				listData:listData,
				style:{
					transformObject:'',
					opacityObject:'',
					visibilityObject:''	
				}
			}
		},
		props: ['sidebar'],
		watch: {
			'sidebar' (val,oldval) {				
				val?this.style.transformObject='translateX(0%)':this.style.transformObject=''
				val?this.style.opacityObject='1':this.style.opacityObject=''
				val?this.style.visibilityObject='visible':this.style.visibilityObject=''
			}
		},
		ready () {
          	window.document.body.addEventListener('click', this.closed)
        },
        destroy () {
          	window.removeEventListener('click', this.closed)
        },
        methods: {
        	closed (e) {
        		this.sidebar=false
        	}
        }
	}

</script>