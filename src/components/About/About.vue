<template>
	<Layout>
		<template v-slot:aside>
			<EditContent></EditContent>
		</template>

		<template v-slot:panel>
			<TopPanel :title="'Обо мне'" :hash="'#about'"></TopPanel>
		</template>

		<template v-slot:content>
			<section class="about" id="about">
				<header class="about__headline">
					<h2 class="about__title">
						Мои работы
					</h2>
				</header>

				<section class="about__desc">

				</section>
			</section>
		</template>
	</Layout>
</template>

<script>
	import Layout from '../Layout/Layout'
	import TopPanel from '../Layout/TopPanel'
	import EditContent from './EditContent'

	export default {
		components: {
			Layout,
			TopPanel,
			EditContent,
		},
		data() {
			return {}
		}
	}
</script>
