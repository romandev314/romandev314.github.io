<template>
	<div class="layout">
		<Header></Header>

		<slot name="screen"></slot>

		<main class="layout__main">
			<aside class="layout__aside">
				<slot name="aside"></slot>
			</aside>

			<section class="layout__content">
				<slot name="panel"></slot>
				<slot name="content"></slot>
			</section>
		</main>

		<Footer></Footer>
	</div>
</template>

<script>
	import Header from './Header'
	import Footer from './Footer'


	export default {
		components: {
			Header,
			Footer,
		},
		data() {
			return {}
		}
	}
</script>
