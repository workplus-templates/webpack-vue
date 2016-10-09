<template>
	<div class="detail-page">
		<p>the number of times you come to this page: {{ count }}</p>
		<p><a href="#page">back to the main page</a></p>
	</div>
</template>

<script>
import store from '../vuex/store';
import { incrementCount } from '../vuex/action';
import { getCount } from '../vuex/getter';

export default {
	store,
	ready() {
		this.incrementCount()
	},
	vuex: {
		actions: {
			incrementCount
		},
		getters: {
			count: getCount
		}
	}
}
</script>

<style lang="less">
</style>