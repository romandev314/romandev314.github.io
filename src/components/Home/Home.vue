<template>
	<Layout>
		<template v-slot:screen>
			<MainScreen></MainScreen>
		</template>

		<template v-slot:aside>
			<section>
				<h1>aside</h1>
			</section>
		</template>

		<template v-slot:content>
			<section class="home" >
				<h1>home</h1>
			</section>
		</template>
	</Layout>
</template>

<script>
	import Layout from '../Layout/Layout'
	import MainScreen from './MainScreen'

	export default {
		components: {
			Layout,
			MainScreen
		},
		data() {
			return {}
		}
	}
</script>
