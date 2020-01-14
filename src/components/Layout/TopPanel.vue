<template>
	<header class="top-panel">
		<div class="top-panel__desc">
			<router-link class="button" :to="{hash: hash}">
				<strong class="top-panel__btn-text">
					{{ title }}
				</strong>
			</router-link>
		</div>
	</header>
</template>


<script>
	export default {
		props: {
		  	title: String,
			hash: String,
		},
		data() {
			return {}
		}
	}
</script>
