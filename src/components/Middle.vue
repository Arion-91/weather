<template>
	<div class="middle">
		<div class="degree">
			<img src="../assets/cloud.png" alt="cloud">
			<p>{{weather.temp}}&deg;</p>
		</div>
		<p>Преимущественно солнечно</p>
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
		margin-bottom: 150px;
	}

	.degree {
		display: flex;
		margin: 20px;
	}

	.degree p {
		font-size: 100px;
	}

	p {
		font-size: 25px;
	}
</style>
