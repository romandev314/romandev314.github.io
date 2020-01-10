<template>
	<nav class="menu">
		<div class="menu__open-wrap">
			<button class="menu__open-btn" type="button">
				<span class="menu__open-line"></span>
				<span class="menu__open-line"></span>
				<span class="menu__open-line"></span>
			</button>
		</div>

		<div class="menu__desc">
			<div class="drop-menu">
				<div class="menu-desc">
					<div class="menu-desc__avatar">
						<div class="user">

							<img class="menu__avatar"
								 src="../../assets/images/pic/roman-yurchenko.jpg"
								 alt="Roman Yurchenko">

							<div class="name">
								Roman Yurchenko
							</div>
						</div>
					</div>

					<div class="menu-desc__nav">
						<nav class="nav-main">
							<ul class="nav-main__list">
								<li class="nav-main__item">
									<router-link class="nav-main__link" to="/">Мои работы</router-link>
								</li>

								<li class="nav-main__item">
									<router-link class="nav-main__link" to="/about">Обо мне</router-link>
								</li>

								<li class="nav-main__item">
									<router-link class="nav-main__link" to="/contacts">Контакты</router-link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>
