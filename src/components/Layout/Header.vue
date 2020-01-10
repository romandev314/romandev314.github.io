<template>
	<header class="header">
		<div class="header__logo-wrap">
			<a class="header__logo" href="#top-anchor">
				<div class="header__logo-brand" hidden>
					<abbr class="header__logo-text  header__logo-text--1" title="HyperText Markup Language">
						html
					</abbr>

					<div class="header__logo-pic">
						<div class="icon-css"></div>
					</div>
				</div>

				<div class="header__logo-brand">
					<abbr class="header__logo-text  header__logo-text--2" title="Cascading Style Sheets">
						vue js
					</abbr>

					<div class="header__logo-pic">
						<div class="icon-vue"></div>
					</div>
				</div>
			</a>
		</div>

		<div class="header__menu">
			<Menu></Menu>
		</div>
	</header>
</template>

<script>
	import Menu from './Menu'

	export default {
		components: {
			Menu: Menu,
		},
		data() {
			return {

			}
		}
	}
</script>
