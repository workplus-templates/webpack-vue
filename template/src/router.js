export default(router) => router.map({
	'/page': {
		name: 'page',
		component: require('./views/page')
	},
	'/detail': {
		name: 'detail',
		component: require('./views/detail')
	}
});