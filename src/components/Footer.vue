<template>
	<div class="footer">
		<div>
			<p>Ветер</p>
			<p>5 м/с</p>
		</div>
		<div>
			<p>Давление</p>
			<p>752 мм рт.ст.</p>
		</div>
		<div>
			<p>Влажность</p>
			<p>60%</p>
		</div>
		<div>
			<p>Вероятность дождя</p>
			<p>10%</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Footer"
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
