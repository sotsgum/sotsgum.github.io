<main class="main">
	<div class="text">
		<h1 class="heading">Кнопка "Стоп&#8209;буллинг"</h1>
		<p class="description">
			Кнопка экстренного реагирования позволяет избавиться от буллинга в любом виде - лишь одно
			нажатие на кнопку сразу же прекращает весь буллинг на территории сотсгума.
		</p>
	</div>
	<div class="button">
		<button class="button__inner">
			<div class="button__text">
				<span class="button__span button__stop">СТОП</span>
				<span class="button__span button__bullying">БУЛЛИНГ</span>
			</div>
		</button>
	</div>
</main>

<style lang="scss">
	.main {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-self: center;
		padding-bottom: 14vh;
		max-width: 80em;
		@include desktop {
			flex-direction: row;
			column-gap: 2em;
		}
	}

	.text {
		flex: 0;
		@include desktop {
			font-size: min(1em, 1.5vw);
		}
	}

	.heading {
		margin: 0;
		margin-bottom: min(0.3em, 8vw);
		padding: 0 min(2em, 4vw);
		font-size: min(3.5em, 11vw);
		text-align: center;
	}

	.description {
		margin: 0;
		margin-bottom: min(2em, 12vw);
		padding: 0 min(2em, 4vw);
		color: hsl(0, 0%, 40%);
		font-size: min(1.75em, 6vw);
		text-align: center;
	}

	.button {
		display: block;
		padding: 0.5em;
		aspect-ratio: 1 / 1;
		background: radial-gradient(hsl(0, 0%, 40%), hsl(0, 0%, 100%));
		border: 0.15em solid hsl(0, 0%, 80%);
		box-shadow: 0.25em 0.25em 2em 0 hsla(0, 0%, 0%, 25%);
		border-radius: 50%;
		font-size: min(4em, 9vw);
		overflow: hidden;
		&__inner {
			display: flex;
			align-items: center;
			aspect-ratio: 1 / 1;
			color: white;
			background: radial-gradient(hsl(231, 79%, 61%), hsl(231, 79%, 54%));
			border: 0.5em solid hsl(231, 79%, 54%);
			border-radius: 50%;
			overflow: hidden;
			cursor: pointer;
			-webkit-tap-highlight-color: transparent;
			&:active {
				border-color: hsl(231, 65%, 49%);
				transform: scale(0.9);
				.button__text {
					background-color: hsla(0, 0%, 0%, 10%);
				}
				&,
				& * {
					transition: all 0.15s cubic-bezier(0.165, 0.84, 0.44, 1);
				}
			}
		}
		&__text {
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 1em;
			width: 100%;
			height: 100%;
			font-weight: bold;
			user-select: none;
		}
		&__span {
			display: block;
		}
		&__stop {
			font-size: 1.6em;
		}
		& * {
			transition: all 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275);
		}
		@include desktop {
			font-size: min(4em, 4vw);
		}
	}
</style>
