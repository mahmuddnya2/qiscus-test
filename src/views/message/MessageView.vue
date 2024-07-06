<template>
	<div class="ml-[420px] w-full">
		<div class="w-full">
			<div id="BG"></div>
			<div class="border-l border-green-500 w-full">
				<div
					class="bg-[#f0f0f0] fixed z-10 min-w-[calc(100vw-420px)] flex justify-between items-center px-2 py-2">
					<div class="flex items-center">
						<div
							class="rounded-full mx-1 w-10 bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
							<ArrowLeftIcon fillColor="#515151" @click="open = false" />
						</div>
						<img
							src="https://media.licdn.com/dms/image/C510BAQFjaULATkW3cw/company-logo_200_200/0/1630567301263/qiscus_logo?e=1728518400&v=beta&t=0MvnNsuYfCorVLoQ9yUJxlWp-E0CMmbuOmFsWd77f4Y"
							alt="Preview Image"
							class="rounded-full mx-1 w-10" />

						<div class="text-gray-900 ml-1 font-semibold">Frank</div>
					</div>
					<DotsVerticalIcon fillColor="#515151" class="cursor-pointer" />
				</div>
			</div>

			<div
				id="MessageSection"
				class="pt-20 pb-8 z-[-1] h-[calc(100vh-65px)] w-[calc(100vw-420px)] overflow-auto fixed touch-auto">
				<div class="px-2 text-sm">
					<div class="flex w-[calc(100%-50px)]">
						<div class="inline-block bg-white p-2 rounded-md my-1">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Asperiores, ratione iste. Eaque perspiciatis tempore sapiente
							perferendis necessitatibus quis similique harum!
						</div>
					</div>
				</div>
				<div class="px-2 text-sm">
					<div
						class="flex justify-end space-x-1 float-right w-[calc(100%-50px)]">
						<div
							class="inline-block bg-[#02416c] text-white p-2 rounded-md my-1">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Asperiores, ratione iste. Eaque perspiciatis tempore sapiente
							perferendis necessitatibus quis similique harum!
						</div>
					</div>
				</div>
			</div>

			<div class="w-[calc(100vw-420px)] p-2.5 z-10 bg-[#f0f0f0] fixed bottom-0">
				<div class="flex items-center justify-center">
					<PaperclipIcon :size="27" fillColor="#515151" class="mx-1.5 mr-3" />
					<input
						type="text"
						class="mr-1 shadow appearance-none w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-lg"
						autocomplete="off"
						placeholder="Type message" />

					<button
						type="submit"
						class="ml-3 p-2 w-12 flex items-center justify-center">
						<SendIcon fillColor="#515151" />
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import DotsVerticalIcon from "vue-material-design-icons/DotsVertical.vue";
	import PaperclipIcon from "vue-material-design-icons/Paperclip.vue";
	import ArrowLeftIcon from "vue-material-design-icons/ArrowLeft.vue";
	import SendIcon from "vue-material-design-icons/Send.vue";
	import { open } from "../../utils";
</script>
