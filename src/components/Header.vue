<template>
	<div class="header flex">
		<div v-if="!edit">
			<h1>{{city}}</h1>
			<div class="location flex">
				<button @click="editText">Сменить город</button>
				<button>Мое местоположение</button>
			</div>
		</div>
		<div v-else class="edit">
			<input type="text" v-model="text" @keyup.enter="setCity">
			<button @click="setCity">OK</button>
		</div>
		<div class="flex">
			<p class="degree-zero">&deg;</p>
			<div class="degree flex">
				<button :class="[tempType === 'metric' ? 'degree-active degree-active-celsius' : '']" @click="setTypeTemp('metric')">C</button>
				<button :class="[tempType === 'imperial' ? 'degree-active degree-active-fahrenheit' : '']" @click="setTypeTemp('imperial')">F</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Header",

		data() {
			return {
				edit: false,
				text: ""
			}
		},

		props: [
			"isLoading",
			"city",
			"tempType"
		],

		methods: {
			setTypeTemp(type) {
				this.$store.dispatch("changeTypeTemp", type)
					.then(() => {
						this.$store.dispatch("loadingData")
					});
			},
			editText() {
				this.edit = true;
				this.text = this.city;
			},
			setCity() {
				this.edit = false;
				this.$store.dispatch("changeCity", this.text)
					.then(() => {
						this.$store.dispatch("loadingData")
					});
			}
		}
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
		outline: none;
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
		background-color: rgba(255, 255, 255, .2);
		color: white;
		font-weight: bold;
		opacity: 1;
	}

	.degree-active-celsius {
		border-radius: 15px 0 0 15px;
	}

	.degree-active-fahrenheit {
		border-radius: 0 15px 15px 0;
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

	.edit {
		position: relative;
	}

	.edit input {
		border: none;
		border-radius: 8px;
		padding: 20px;
		font-size: 30px;
	}

	.edit button {
		position: absolute;
		right: 20px;
		top: 23%;
		font-size: 26px;
		color: #009BFF;
	}
</style>
