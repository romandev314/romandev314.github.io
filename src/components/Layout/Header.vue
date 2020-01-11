<template>
	<header class="header">
		<div class="header__logo-wrap">
			<div class="header__logo-holder">
				<router-link class="header__logo" to="/" :class="{ 'header__logo--active': $store.state.open }">
					<div class="header__logo-brand  header__logo-brand--hidden">
						<abbr class="header__logo-text  header__logo-text--1" title="HyperText Markup Language">
							html
						</abbr>

						<div class="header__logo-pic">
							<div class="icon-html"></div>
						</div>
					</div>

					<div class="header__logo-brand">
						<abbr class="header__logo-text  header__logo-text--2" title="Cascading Style Sheets">
							css
						</abbr>

						<div class="header__logo-pic">
							<div class="icon-css"></div>
						</div>
					</div>
				</router-link>
			</div>
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
