<template>
	<div id="main">
		<Header title="喵喵影院"/>
		<TabBar />
	</div>
</template>

<script>
	import Header from '../../components/Header'
	import TabBar from '../../components/TabBar/index.vue'
	
	export default{
		name:'cinema',
		components:{
			Header,
			TabBar
			
		}
	}
</script>

<style>
</style>
