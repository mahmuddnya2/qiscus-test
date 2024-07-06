<template>
	<div class="flex">
		<div id="header" class="fixed w-[420px] z-10">
			<NavComponent />

			<div id="search" class="bg-white w-full px-2 border-b shadow-sm">
				<div
					class="px-1 m-2 bg-[#f0f0f0] flex items-center justify-center rounded-md">
					<MagnifyIcon fillColor="#515151" class="ml-2" :size="18" />
					<input
						type="text"
						class="ml-5 appearance-none w-full bg-[#f0f0f0] py-1.5 px-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:text-gray-500"
						autocomplete="off"
						placeholder="Search chat" />
				</div>
			</div>
		</div>

		<GroupChatView class="mt-[100px]" />

		<div v-if="openGroup">
			<GroupMessageView />
		</div>

		<div v-else>
			<NotSelectedChatComponent />
		</div>
	</div>
</template>

<script setup>
	import MagnifyIcon from "vue-material-design-icons/Magnify.vue";

	import { openGroup } from "../utils.js";
	import GroupChatView from "./chat/GroupChatView.vue";
	import NavComponent from "../components/NavComponent.vue";
	import GroupMessageView from "./message/GroupMessageView.vue";
	import NotSelectedChatComponent from "../components/NotSelectedChatComponent.vue";
</script>
