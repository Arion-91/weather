<template>
	<div id="app">
		<Header :isLoading="isLoading" :city="city"></Header>
		<Middle :isLoading="isLoading" :weather="weather"></Middle>
		<Footer :isLoading="isLoading" :weather="weather"></Footer>
	</div>
</template>

<script>
	import Header from './components/Header';
	import Middle from './components/Middle';
	import Footer from './components/Footer';

	export default {
		name: 'app',
		components: {
			Header,
			Middle,
			Footer
		},

		mounted() {
			this.$store.dispatch("loadingData");
		},

		computed: {
			isLoading() {
				return this.$store.getters.isLoading;
			},
			weather() {
				return this.$store.getters.getWeather;
			},
			city() {
				return this.$store.getters.getCity;
			}
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	#app {
		background-color: #498CEC;
		height: 100vh;
		width: 100vw;
		color: white;
	}
</style>
