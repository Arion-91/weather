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

</style>
