<template>
	<ul class="works-galery">
		<li class="works-galery__item" v-for="work in works">
			<div class="galery-item" :class="work.className">
				<small class="galery-item__counter">
					{{ work.links.length }}
				</small>

				<div class="galery-item__img">
					<img class="galery-item__pic"
						 :src="work.img"
						 :alt="work.title">
				</div>

				<div class="galery-item__shade">
					<div class="galery-shade">
						<h3 class="galery-shade__title">
							{{ work.title }}
						</h3>

						<ul class="link-list-gal">
							<li class="link-list-gal__item" v-for="link in work.links">
								<a class="link-list-gal__link"
								   :href="link.link"
								   target="_blank"
								   :class="link.className"
								>
									{{ link.name }}
								</a>
							</li>
						</ul>

						<small class="galery-shade__small">
							<span>{{ work.year }}</span>
							<span>{{ work.status }}</span>
						</small>
					</div>
				</div>
			</div>
		</li>
	</ul>
</template>

<script>
	export default {
		data() {
			return {
				works: [
					{
						title: 'mimi.ua',
						year: '2018',
						img: 'works-img/mimi.jpg',
						status: 'Прод/Верстка',
						className: 'galery-item--prod',
						links: [
							{
								name: 'mimi.ua',
								link: 'http://mimi.ua/',
								className: 'link-list-gal__link--prod',
							},
							{
								name: 'Главная',
								link: 'works/mimi/index.html',
							},
							{
								name: 'Почему мы  ←',
								link: 'works/mimi/why-wi.html',
							},
							{
								name: 'Категории',
								link: 'works/mimi/catalogue.html',
							},
							{
								name: 'Карточка',
								link: 'works/mimi/product-card.html',
							},
							{
								name: 'Продукт лист',
								link: 'works/mimi/product-list.html',
							},
						],
					},
					{
						title: 'Login',
						year: '2017',
						img: 'works-img/login.jpg',
						status: 'Верстка',
						links: [
							{
								name: 'index.html',
								link: 'works/login/dist/html/index.html',
							},
						],
					},
					{
						title: 'avtek-export.com',
						year: '2017',
						img: 'works-img/avtek.png',
						status: 'Прод/Верстка',
						className: 'galery-item--prod',
						links: [
							{
								name: 'avtek-export.com',
								link: 'http://avtek-export.com',
								className: 'link-list-gal__link--prod',
							},
							{
								name: 'Главная',
								link: 'works/avtek/html/index.html',
							},
						],
					},
					{
						title: 'Dev Challenge',
						year: '2017',
						img: 'works-img/devchall.png',
						status: 'Верстка',
						links: [
							{
								name: 'Тур 1',
								link: 'works/devchall/tour-1/html/index.html',
							},
							{
								name: 'Тур 2',
								link: 'works/devchall/tour-2/html/index.html',
							},
						],
					},
					{
						title: 'Webstars',
						year: '2018',
						img: 'works-img/webstars.png',
						status: 'Прод/Верстка',
						className: 'galery-item--prod',
						links: [
							{
								name: 'Webstars',
								link: 'https://webstars.com.ua/',
								className: 'link-list-gal__link--prod',
							},
							{
								name: 'index.html',
								link: 'works/webstars/index.html',
							},
						],
					},
					{
						title: 'Current-color',
						year: '2017',
						img: 'works-img/current-color.png',
						status: 'Верстка',
						links: [
							{
								name: 'index.html',
								link: 'works/current-color/index.html',
							},
						],
					},
					{
						title: 'Animation',
						year: '2018',
						img: 'works-img/animation.png',
						status: 'Верстка',
						links: [
							{
								name: 'index.html',
								link: 'works/animation/index.html',
							},
						],
					},
					{
						title: 'Card',
						year: '2017',
						img: 'works-img/card.png',
						status: 'Верстка',
						links: [
							{
								name: 'index.html',
								link: 'works/card/index.html',
							},
						],
					},
					{
						title: 'Lending',
						year: '2017',
						img: 'works-img/lending.png',
						status: 'Верстка',
						links: [
							{
								name: 'lending 1',
								link: 'works/lending/index.html',
							},
							{
								name: 'lending 2',
								link: 'works/lending/debts.html',
							},
							{
								name: 'lending 3',
								link: 'works/lending/liquidate.html',
							},
						],
					},
					{
						title: 'lim.ua',
						year: '2017',
						img: 'works-img/lim.jpg',
						status: 'Прод/Верстка',
						className: 'galery-item--prod',
						links: [
							{
								name: 'lim.ua',
								link: 'https://lim.ua',
								className: 'link-list-gal__link--prod',
							},
							{
								name: 'Главная',
								link: 'works/lim/index.html',
							},
							{
								name: 'Карта товара',
								link: 'works/lim/card-page.html',
							},
						],
					},
					{
						title: 'Watch',
						year: '2017',
						img: 'works-img/watch.jpg',
						status: 'Верстка',
						links: [
							{
								name: 'index.html',
								link: 'works/watch/index.html',
							},
						],
					},
					{
						title: 'Watch cell admin',
						year: '2017',
						img: 'works-img/watch-cell-admin.jpg',
						status: 'Верстка',
						links: [
							{
								name: 'index.html',
								link: 'works/watch-cell-admin/index.html',
							},
							{
								name: 'app-admin',
								link: 'works/watch-cell-admin/app-admin.html',
							},
							{
								name: 'prod-list',
								link: 'works/watch-cell-admin/prod-list.html',
							},
							{
								name: 'table',
								link: 'works/watch-cell-admin/table.html',
							},
						],
					},
					{
						title: 'Watch cell',
						year: '2016',
						img: 'works-img/watch-cell.jpg',
						status: 'Верстка',
						links: [
							{
								name: 'Главная',
								link: 'works/watch-cell/index.html',
							},
							{
								name: 'Карта товара',
								link: 'works/watch-cell/product-card.html',
							},
							{
								name: 'Список товаров',
								link: 'works/watch-cell/product.html',
							},
							{
								name: 'faq',
								link: 'works/watch-cell/faq.html',
							},
							{
								name: 'Page-1',
								link: 'works/watch-cell/page-1.html',
							},
							{
								name: 'Page-2',
								link: 'works/watch-cell/page-2.html',
							},
							{
								name: 'Page-3',
								link: 'works/watch-cell/page-3.html',
							},
						],
					},
					{
						title: 'Lend',
						year: '2017',
						img: 'works-img/lend.jpg',
						status: 'Верстка',
						links: [
							{
								name: 'index.html',
								link: 'works/lend/index.html',
							},
						],
					},
					{
						title: 'ms20.com.ua',
						year: '2017',
						img: 'works-img/sto.jpg',
						status: 'Прод/Верстка',
						className: 'galery-item--prod',
						links: [
							{
								name: 'ms20.com.ua',
								link: 'https://www.ms20.com.ua/',
								className: 'link-list-gal__link--prod',
							},
							{
								name: 'Главная',
								link: 'works/sto/index.html',
							},
						],
					},
					{
						title: 'Shnider',
						year: '2017',
						img: 'works-img/shnider.jpg',
						status: 'Верстка',
						links: [{
							name: 'index.html',
							link: 'works/shnider/index.html',
						},
						],
					},
					{
						title: 'Mixbucket',
						year: '2016',
						img: 'works-img/mixbucket.jpg',
						status: 'Верстка',
						links: [
							{
								name: 'index.html',
								link: 'works/mixbucket/index.html',
							},
						],
					},
					{
						title: 'Promopt srore',
						year: '2016',
						img: 'works-img/promopt.jpg',
						status: 'Верстка',
						links: [
							{
								name: 'Главная',
								link: 'works/promopt/index.html',
							},
							{
								name: 'Корзина',
								link: 'works/promopt/cart.html',
							},
							{
								name: 'Корзина логин',
								link: 'works/promopt/cart-login.html',
							},
							{
								name: 'Категории',
								link: 'works/promopt/category.html',
							},
							{
								name: 'Новости',
								link: 'works/promopt/news.html',
							},
							{
								name: 'Авторизация',
								link: 'works/promopt/login.html',
							},
							{
								name: 'Продукт',
								link: 'works/promopt/product-item.html',
							},
							{
								name: 'Форма',
								link: 'works/promopt/reg.html',
							},
						],
					},
					{
						title: 'Beperfect',
						year: '2016',
						img: 'works-img/beperfect.jpg',
						status: 'Прод',
						className: 'galery-item--prod',
						links: [
							{
								name: 'Beperfect',
								link: 'http://beperfect.kiev.ua/',
								className: 'link-list-gal__link--prod',
							},
						],
					},
					{
						title: 'Forest',
						year: '2016',
						img: 'works-img/forest.jpg',
						status: 'Верстка',
						links: [
							{
								name: 'index.html',
								link: 'works/forest/index.html',
							},
						],
					},
					{
						title: 'System-k',
						year: '2016',
						img: 'works-img/osnova.jpg',
						status: 'Прод',
						className: 'galery-item--prod',
						links: [
							{
								name: 'system-k',
								link: 'https://system-k.com.ua/',
								className: 'link-list-gal__link--prod',
							},

						],
					},
					{
						title: 'Videonablyudenie',
						year: '2016',
						img: 'works-img/videonablyudenie.jpg',
						status: 'Верстка',
						links: [
							{
								name: 'index.html',
								link: 'works/videonablyudenie/index.html',
							},
						],
					},
					{
						title: 'Fruktopia',
						year: '2016',
						img: 'works-img/fruktopia.jpg',
						status: 'Прод',
						className: 'galery-item--prod',
						links: [
							{
								name: 'Fruktopia',
								link: 'http://fruktopia.com.ua/',
								className: 'link-list-gal__link--prod',
							},

						],
					},
					{
						title: 'Горизонтальный скролл',
						year: '2016',
						img: 'works-img/horizontal-scroll.jpg',
						status: 'Верстка',
						links: [
							{
								name: 'index.html',
								link: 'works/horizontal-scroll/index.html',
							},
						],
					},
					{
						title: 'Старое портфолио',
						year: '2016',
						img: 'works-img/portfolio-old.jpg',
						status: 'Верстка',
						links: [
							{
								name: 'index.html',
								link: 'works/portfolio-old/index.html',
							},
						],
					},
				],
			}
		}
	}
</script>
