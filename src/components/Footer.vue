<template>
	<div class="footer">
		<div>
			<p>Ветер</p>
			<p>{{weather.windSpeed}} {{tempType === 'metric' ? 'м/с' : 'миль/ч'}}</p>
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
			'weather',
			'tempType'
		]
	}
</script>

<style scoped>
	.footer {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		margin-bottom: 100px;
		font-size: 18px;
	}

	.footer div {
		margin: 5px;
	}

	div p:first-child {
		opacity: .6;
	}

	div p:last-child {
		font-size: 25px;
	}

	@media (max-width: 768px) {
		.footer {
			display: grid;
			grid-template-areas: "i i" "i i";
			width: 100%;
			/*position: absolute;*/
			/*bottom: 0;*/
			margin: 30px 0;
		}

		.footer div {
			margin: 10px;
		}

		div p:last-child {
			font-size: 20px;
		}
	}
</style>
