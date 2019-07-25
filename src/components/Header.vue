<template>
	<div class="header flex">
		<div>
			<h1>{{city}}</h1>
			<div class="location flex">
				<button>Сменить город</button>
				<button>Мое местоположение</button>
			</div>
		</div>
		<div class="flex">
			<p class="degree-zero">&deg;</p>
			<div class="degree flex">
				<button class="degree-active">C</button>
				<button>F</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Header",

		props: [
			"isLoading",
			"city"
		]
	}
</script>

<style scoped>
	.flex {
		display: flex;
		justify-content: space-between;
		align-content: normal;
	}

	.header {
		padding: 80px 75px 80px 100px;
	}

	button {
		background: none;
		border: none;
		color: white;
		font-size: 18px;
		opacity: .6;
	}

	.location button:first-child {
		padding-right: 25px;
	}

	.location button:last-child {
		padding-left: 25px;
		background: url("../assets/Path 2.png") no-repeat 0 -3px;
	}

	.degree {
		align-self: flex-start;
		border: 2px solid rgba(255, 255, 255, .4);
		border-radius: 18px;
	}

	.degree button {
		padding: 10px 15px;
	}

	.degree-active {
		border-radius: 15px 0 0 15px;
		background-color: rgba(255, 255, 255, .2);
		color: white;
		font-weight: bold;
		opacity: 1;
	}

	.degree-zero {
		margin: 2px 10px;
		font-size: 36px;
		opacity: .6;
	}

	h1 {
		margin-bottom: 20px;
		font: 50px normal;
	}
</style>
