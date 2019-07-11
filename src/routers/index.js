import Vue from 'vue'
import Router from 'vue-router'
import movie from './movie'
import mine from './mine'
import cineam from './cinema'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
			movie,
			cineam,			
			mine,
			{
				path: '/*',
				redirect : '/movie'
			}
			
		
  ]
})
