export default{
	path :'/movie',
	component : () => import('@/views/movie'),
	children : [
		{
			path : 'now',
			component : () => import('@/components/Now')			
		},
		{
			path : 'coming',
			component : () => import('@/components/Coming')
		},
		{
			path : 'search',
			component : () => import('@/components/Search')
		},
		{
			path : 'cicty',
			component : () => import('@/components/Cicty')
		},
		{
			path: '/movie',
			redirect : '/movie/Now'
		}

	]
		
	
}