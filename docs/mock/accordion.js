module.exports = [
	{
		name:'基本',
		child:[
			{
				header:'标题文字',
				show:false,
				activeKey:'1',
				child:[
					{name:'子内容子内容1'},
					{name:'子内容子内容2'},
					{name:'子内容子内容3'},
					{name:'子内容子内容4'}
				]
			},
			{
				header:'标题文字',
				show:true,
				activeKey:'3',
				child:[
					{name:'this is panel content0 or other'},
					{name:'this is panel content1 or other'},
					{name:'this is panel content2 or other'},
					{name:'this is panel content3 or other'},
					{name:'this is panel content4 or other'},
					{name:'this is panel content5 or other'}
				]
			},
			{
				header:'标题文字',
				show:false,
				activeKey:'0',
				child:[
					{name:'文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容'}
				]
			}	
		]
	},
	{
		name:'手风琴模式',
		child:[
			{
				header:'标题文字',
				show:true,
				child:[
					{name:'this is panel content2 or other'}
				]
			},
			{
				header:'标题文字',
				show:true,
				child:[
					{name:'文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容'}
				]
			}	
		]
	}
]