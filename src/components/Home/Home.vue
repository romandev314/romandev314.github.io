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
						<Button
							class="home__menu-btn"
							v-for="nav in navigation"
							:key="nav.id"
							v-on:click.native="{ selected = nav.id }"
							:class="{ 'active': selected == nav.id }"
						>
							{{ nav.name }}
						</Button>
					</div>

					<transition name="fade">
						<div class="home__item" v-if="selected == 1">
							<WorksGalery></WorksGalery>
						</div>
					</transition>

					<transition name="fade">
						<div class="home__item" v-if="selected == 2">
							<WorksJs></WorksJs>
						</div>
					</transition>

					<transition name="fade">
						<div class="home__item" v-if="selected == 3">
							<LinksList></LinksList>
						</div>
					</transition>
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
	import WorksJs from './WorksJs'
	import LinksList from './LinksList'
	import Button from '../../components/Common/Button'

	export default {
		components: {
			Layout,
			MainScreen,
			TopPanel,
			PixelsSect,
			WorksGalery,
			WorksJs,
			LinksList,
			Button,
		},
		data() {
			return {
				selected: '1',
				navigation: [
					{name: 'Работы', id: '1',},
					{name: 'Javascript', id: '2',},
					{name: 'Ссылки', id: '3',},
				],
			}
		}
	}
</script>
