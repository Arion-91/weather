<template>
	<div class="footer">
		<div>
			<p>Ветер</p>
			<p>{{weather.windSpeed}} м/с</p>
		</div>
		<div>
			<p>Давление</p>
			<p>{{weather.pressure}} мм рт.ст.</p>
		</div>
		<div>
			<p>Влажность</p>
			<p>{{weather.humidity}}%</p>
		</div>
		<div>
			<p>Вероятность дождя</p>
			<p>{{weather.rain}}%</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Footer",

		props: [
			'isLoading',
			'weather'
		]
	}
</script>

<style scoped>
	.footer {
		display: flex;
		justify-content: space-around;
		margin: 30px;
		font-size: 18px;
	}

	div p:first-child {
		opacity: .6;
	}

	div p:last-child {
		font-size: 25px;
	}
</style>
