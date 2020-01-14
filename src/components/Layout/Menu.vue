<template>
	<nav class="menu" :class="{ 'menu--active': $store.state.open }">
		<div class="menu__overlay"
			 @click="isActiveClass()"
			 v-if="$store.state.open">
		</div>

		<div class="menu__open-wrap">
			<button
				class="menu__open-btn"
				type="button"
				@click="isActiveClass()"
			>
				<span class="menu__open-line" v-for="item in 3"></span>
			</button>
		</div>

		<div class="menu__drop-wrap">
			<div class="menu__drop">
				<div class="menu__desc">
					<div class="menu__avatar-wrap">
						<div class="menu__avatar">
							<img class="menu__avatar-pic"
								 src="../../assets/images/pic/roman-yurchenko.jpg"
								 alt="Roman Yurchenko">

							<h3 class="menu__name">
								Roman Yurchenko
							</h3>
						</div>
					</div>

					<ul class="menu__list">
						<li class="menu__list-item" v-for="item in list">
							<router-link class="menu__list-link"
										 :to="item.link"
										 @click.native="isActiveClass()"
							>
								{{ item.title }}
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
					  title: 'Мои работы',
					  link: '/',
					},
					{
						title: 'Обо мне',
						link: '/about',
					},
					{
						title: 'Контакты',
						link: '/contacts',
					},
				]
			}
		},
		methods: {
		  isActiveClass() {
			  this.$store.commit('toggleOpen');
		  }
		}
	}
</script>
