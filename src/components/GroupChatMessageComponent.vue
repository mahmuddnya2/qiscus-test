<template>
	<div class="">
		<div
			class="flex w-full px-4 py-3 items-center cursor-pointer"
			@click="openGroup = true">
			<img :src="image_url" alt="Qiscus Logo" class="rounded-full mr-4 w-12" />

			<div class="w-full">
				<div class="flex justify-between items-center">
					<div class="text-[15px] text-gray-600">{{ room_name }}</div>
				</div>

				<div class="flex items-center">
					<div
						class="text-[15px] w-full text-gray-500 flex items-center justify-between">
						{{ last_data }} ...
					</div>
				</div>
			</div>
		</div>

		<div class="border-b w-[calc(100%-80px)] float-right"></div>
	</div>
</template>

<script setup>
	import { data, openGroup } from "../utils.js";
	const image_url = data.room.image_url;
	const room_name = data.room.name;

	const last_message = data.comments[data.comments.length - 1].message;
	let last_data = last_message.split(" ");
	last_data = last_data.slice(0, 4);
	last_data = last_data.join(" ");
</script>
