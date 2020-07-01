import asyncComponent from './asyncComponent'
const index = asyncComponent(() => import('Pages/index'))
const page2 = asyncComponent(() => import('Pages/page2'))

let AppRoutes=[
	{
		path:'/index',
		component:index,
		exact:true,
		child:[
			{
				path:'/page2',
				component:page2,
				exact:true,
				child:'child'
			},
		]
	},

]
export default AppRoutes
