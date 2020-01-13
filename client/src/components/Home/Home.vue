<template>
	<Layout>
		<template v-slot:screen>
			<MainScreen></MainScreen>
		</template>

		<template v-slot:aside>
			<PixelsSect></PixelsSect>
		</template>

		<template v-slot:panel>
			<TopPanel :title="'Мои работы'" :hash="'#home'"></TopPanel>
		</template>

		<template v-slot:content>
			<section class="home" id="home">
				<header class="home__headline">
					<h2 class="home__title">
						Мои работы
					</h2>
				</header>

				<section class="home__desc">
					<div class="home__menu">
						<button class="home__tab-btn" type="button">Работы</button>
						<button class="home__tab-btn" type="button">Javascript</button>
						<button class="home__tab-btn" type="button">Ссылки</button>
					</div>

					<div class="home__item">
						<WorksGalery></WorksGalery>
					</div>

					<div class="home__item"></div>

					<div class="home__item"></div>
				</section>
			</section>
		</template>
	</Layout>
</template>

<script>
	import Layout from '../Layout/Layout'
	import TopPanel from '../Layout/TopPanel'
	import MainScreen from './MainScreen'
	import PixelsSect from './PixelsSect'
	import WorksGalery from './WorksGalery'

	export default {
		components: {
			Layout,
			MainScreen,
			TopPanel,
			PixelsSect,
			WorksGalery,
		},
		data() {
			return {}
		}
	}
</script>
