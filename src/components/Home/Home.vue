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
						<button
							class="button  home__menu-btn"
							v-for="nav in navigation"
							:key="nav.id"
							v-on:click="{ selected = nav.id }"
							:class="{ 'active': selected == nav.id }"
						>
							{{ nav.name }}
						</button>
					</div>

					<div class="home__item" v-if="selected == 1">
						<WorksGalery></WorksGalery>
					</div>

					<div class="home__item" v-if="selected == 2">
						<iframe height="265" style="width: 100%;" scrolling="no" title="Simple Vue JS Tab" src="https://codepen.io/romajs117/embed/ZEYRXXm?height=265&theme-id=default&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
							See the Pen <a href='https://codepen.io/romajs117/pen/ZEYRXXm'>Simple Vue JS Tab</a> by Roman
							(<a href='https://codepen.io/romajs117'>@romajs117</a>) on <a href='https://codepen.io'>CodePen</a>.
						</iframe>
					</div>

					<div class="home__item" v-if="selected == 3"></div>
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
	import Button from '../../components/Common/Button'

	export default {
		components: {
			Layout,
			MainScreen,
			TopPanel,
			PixelsSect,
			WorksGalery,
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
