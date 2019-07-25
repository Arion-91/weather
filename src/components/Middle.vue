<template>
	<div class="middle">
		<div class="degree">
			<img src="../assets/cloud.png" alt="cloud">
			<p>19&deg;</p>
		</div>
		<p>Преимущественно солнечно</p>
	</div>
</template>

<script>
	export default {
		name: "Middle"
	}
</script>

<style scoped>
	.middle {
		display: flex;
		flex-direction: column;
		align-items: center;
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
