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
							<ArrowLeftIcon fillColor="#515151" @click="openGroup = false" />
						</div>
						<img
							:src="group_image"
							alt="Qiscus Logo"
							class="rounded-full mx-1 w-10" />

						<div class="text-gray-900 ml-1 font-semibold">
							{{ group_name }}
							<div class="text-gray-600 text-sm">
								{{ stringParticipantName }}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				id="MessageSection"
				class="pt-20 pb-8 z-[-1] h-[calc(100vh-65px)] w-[calc(100vw-420px)] overflow-auto fixed touch-auto">
				<div class="px-2 text-sm" v-for="message in messages">
					<template
						v-if="message.sender == 'agent@mail.com' && message.type == 'text'">
						<div class="flex w-[calc(100%-50px)]">
							<div class="inline-block bg-white p-2 rounded-md my-1">
								{{ message.message }}
							</div>
						</div>
					</template>

					<template
						v-else-if="
							message.sender == 'customer@mail.com' && message.type == 'text'
						">
						<div
							class="flex justify-end space-x-1 float-right w-[calc(100%-50px)]"
							v-if="message.sender == 'customer@mail.com'">
							<div
								class="inline-block bg-[#02416c] text-white p-2 rounded-md my-1">
								{{ message.message }}
							</div>
						</div>
					</template>

					<template
						v-else-if="
							message.sender == 'customer@mail.com' && message.type == 'image'
						">
						<div
							class="flex justify-end space-x-1 float-right w-[calc(100%-50px)]"
							v-if="message.sender == 'customer@mail.com'">
							<div
								class="inline-block bg-[#02416c] text-white p-2 rounded-md my-1">
								<img :src="message.image_url" alt="Message Image" />
								{{ message.message }}
							</div>
						</div>
					</template>
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
	import PaperclipIcon from "vue-material-design-icons/Paperclip.vue";
	import ArrowLeftIcon from "vue-material-design-icons/ArrowLeft.vue";
	import SendIcon from "vue-material-design-icons/Send.vue";
	import { openGroup, data } from "../../utils";

	const group_name = data.room.name;
	const group_image = data.room.image_url;
	const messages = data.comments;
	const participant = data.room.participant;

	let stringParticipantName = "";

	for (const participantName of participant) {
		let name = participantName.name;

		stringParticipantName += name + ", ";
	}
	stringParticipantName = stringParticipantName.slice(0, -2);
</script>
