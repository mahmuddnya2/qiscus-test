<template>
	<div class="flex">
		<div id="header" class="fixed w-[420px] max-w-[420px] z-10">
			<NavComponent />

			<div id="search" class="bg-white w-full px-2 border-b shadow-sm">
				<div
					class="px-1 m-2 bg-[#f0f0f0] flex items-center justify-center rounded-md">
					<MagnifyIcon fillColor="#515151" class="ml-2" :size="18" />
					<input
						type="text"
						class="flex-grow ml-5 appearance-none bg-[#f0f0f0] py-1.5 px-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:text-gray-500"
						autocomplete="off"
						placeholder="Search chat" />
				</div>
			</div>
		</div>

		<ChatView class="mt-[100px]" />

		<div v-if="open">
			<MessageView />
		</div>
		<div v-else-if="openGroup">
			<GroupMessageView />
		</div>
		<div v-else>
			<NotSelectedChatComponent />
		</div>
	</div>
</template>

<script setup>
	import ChatView from "./chat/ChatView.vue";
	import MessageView from "./message/MessageView.vue";
	import MagnifyIcon from "vue-material-design-icons/Magnify.vue";

	import { open, openGroup } from "../utils.js";
	import NavComponent from "../components/NavComponent.vue";
	import NotSelectedChatComponent from "../components/NotSelectedChatComponent.vue";
	import GroupMessageView from "./message/GroupMessageView.vue";
</script>
