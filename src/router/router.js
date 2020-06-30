import asyncComponent from './asyncComponent'
const page1 = asyncComponent(() => import('Pages/page1'))
const page2 = asyncComponent(() => import('Pages/page2'))

let AppRoutes=[
	{
		path:'/page1',
		component:page1,
		exact:true,
		child:'child'
	},
	{
		path:'/page2',
		component:page2,
		exact:true,
		child:'child'
	}
]
export default AppRoutes
