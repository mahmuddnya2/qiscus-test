<template>
	<div class="">
		<div
			class="flex w-full px-4 py-3 items-center cursor-pointer"
			@click="open = true">
			<img
				src="https://media.licdn.com/dms/image/C510BAQFjaULATkW3cw/company-logo_200_200/0/1630567301263/qiscus_logo?e=1728518400&v=beta&t=0MvnNsuYfCorVLoQ9yUJxlWp-E0CMmbuOmFsWd77f4Y"
				alt="Qiscus Logo"
				class="rounded-full mr-4 w-12" />

			<div class="w-full">
				<div class="flex justify-between items-center">
					<div class="text-[15px] text-gray-600">Mahmud</div>
				</div>

				<div class="flex items-center">
					<div
						class="text-[15px] w-full text-gray-500 flex items-center justify-between">
						Lorem ipsum dolor sit ...
					</div>
				</div>
			</div>
		</div>

		<div class="border-b w-[calc(100%-80px)] float-right"></div>
	</div>
</template>

<script setup>
	import { open } from "../utils.js";
</script>
