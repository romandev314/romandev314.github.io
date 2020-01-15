<template>
	<ul class="links-list">
		<li class="links-list__item" v-for="item in links">
			<h3 class="links-list__title">
				<span class="links-list__title-icon">
					<span :class="item.icon"></span>
				</span>

				<span class="links-list__title-text">
					{{ item.title }}
				</span>
			</h3>

			<div class="links-list__desc">
				<ul class="links-list__list">
					<li class="links-list__list-item" v-for="link in item.links">
						<a class="links-list__link"  :href="link.link">
							{{link.title}}
						</a>
					</li>
				</ul>
			</div>
		</li>
	</ul>
</template>


<script>
	export default {
		data() {
			return {
				links: [
					{
						title: 'Мои статьи на habr.com',
						icon: 'icon-habr',
						links: [
							{
								title: 'Организация отступов в верстке (margin/padding)',
								link: 'https://habr.com/ru/post/340420/',
							},
							{
								title: 'Кастомный подход для нормализации и сброса стилей (custom-reset.css)',
								link: 'https://habr.com/ru/post/420539/',
							},
						],
					},
					{
						title: 'custom-reset.css',
						icon: 'icon-css',
						links: [
							{
								title: 'custom-reset.css',
								link: '/custom-reset',
							},
						],
					},
					{
						title: 'Обзор портфолио на youtube канале webDev',
						icon: 'icon-youtube',
						links: [
							{
								title: 'Repozitorro #28 - Достойное портфолио верстальщика',
								link: 'https://youtu.be/39Au5hMn_xc',
							},
						],
					},
				],
			}
		}
	}
</script>
