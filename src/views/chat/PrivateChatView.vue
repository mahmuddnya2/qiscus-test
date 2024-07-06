<template>
	<div
		id="Message"
		class="pt-1 z-0 overflow-auto fixed h-[calc(100vh-100px)] w-[420px]">
		<PrivateMessageComponent />
	</div>
</template>

<script setup>
	import PrivateMessageComponent from "../../components/PrivateMessageComponent.vue";
</script>
