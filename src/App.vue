<template>
	<div id="app">
		<Header></Header>
		<Middle></Middle>
		<Footer></Footer>
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
