import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Results from './views/Results.vue';
import Photo from './views/Photo.vue';


Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/results',
			name: 'results',
			component: Results
		},
		{
			path: '/photo',
			name: 'photo',
			component: Photo
		}
	]
});