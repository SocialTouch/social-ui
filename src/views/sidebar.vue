<template>
	<div class="am-drawer am-drawer-left" 
	:class="sidebar?'am-drawer-open':''">
		<div class="am-drawer-sidebar" :style="{ transform: style.transformObject }">
			<div>
				<div class="demo-drawer-home">
					<a v-link="{name:'index'}">Social FE Mobile</a>
				</div>
			</div>
		</div>
		<div class="am-drawer-overlay" role="presentation" tabindex="0" :style="{ opacity: style.opacityObject , visibility : style.visibilityObject}"></div>
	</div>
</template>
<script>

	export default {
		data () {
			return {
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
          	document.addEventListener('click', this.closed)
        },
        destroy () {
          	document.removeEventListener('click', this.closed)
        },
        methods: {
        	closed (e) {
        		this.sidebar=false
        	}
        }
	}

</script>