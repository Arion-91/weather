<template>
	<div class="middle">
		<div class="degree">
			<img :src="weather.image" alt="weather">
			<p>{{weather.temp}}&deg;</p>
		</div>
		<p>{{weather.description}}</p>
	</div>
</template>

<script>
	export default {
		name: "Middle",

		props: [
			"isLoading",
			"weather"
		]
	}
</script>

<style scoped>
	.middle {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 15%;
	}

	.degree {
		display: flex;
		justify-content: center;
		margin: 20px;
	}

	.degree p {
		font-size: 100px;
	}

	p {
		font-size: 25px;
	}

	img, p {
		margin: 5px;
	}

	@media (max-width: 425px) {
		.degree {
			margin: 0;
		}

		.degree p {
			font-size: 60px;
		}

		p {
			font-size: 18px;
		}

		img {
			width: 30%;
			height: 30%;
		}
	}

	@media (max-width: 768px) {
		.middle {
			padding: 0;
		}
	}
</style>
