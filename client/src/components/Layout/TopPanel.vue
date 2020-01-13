<template>
	<div class="top-panel">
		<div class="top-panel__desc">
			<router-link class="top-panel__btn" :to="{hash: hash}">
				<strong class="top-panel__btn-text">
					{{ title }}
				</strong>
			</router-link>
		</div>
	</div>
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
