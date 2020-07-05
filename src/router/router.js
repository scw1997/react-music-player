import asyncComponent from './asyncComponent'
const index = asyncComponent(() => import('Pages/index'))
const recommend = asyncComponent(() => import('Pages/recommend/recommend'))
const search = asyncComponent(() => import('Pages/search/search'))
const player = asyncComponent(() => import('Pages/player/player'))

let AppRoutes=[
	{
		path:'/',
		component:index,
		exact:true,
		child:[]
	},
	{
		path:'/index',
		component:index,
		child:[
			{
				path:'/index/recommend',
				component:recommend,
				exact:true,
			},
			{
				path:'/index/search',
				component:search,
				exact:true,
			},
		]
	},
	{
		path:'/player/:id?/:albumId?',
		component:player,
		exact:true,
	},
	// {
	// 	path:'',
	// 	component:player,
	// 	exact:true,
	// },


]
export default AppRoutes
