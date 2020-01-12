<template>
	<section class="main-screen">
		<div class="main-screen__desc">
			<strong class="main-screen__text">
				Hello
			</strong>

			<div class="main-screen__main">
				<p class="main-screen__title-text">I’m a</p>

				<div class="title-main__animate">
					<CubeLetter></CubeLetter>
				</div>

				<h1 class="main-screen__title-text">
					<span class="visually-hidden">front</span>
					end developer
				</h1>
			</div>

			<div class="main-screen__sub-title">
				<em class="main-screen__sub-title-text">Welcome to My</em>

				<div class="main-screen__btn-animation">
					<ButtonAnim></ButtonAnim>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import CubeLetter from './CubeLetter'
	import ButtonAnim from '../../components/Common/ButtonAnim'

	export default {
		components: {
			CubeLetter,
			ButtonAnim,
		},
		data() {
			return {}
		}
	}
</script>
