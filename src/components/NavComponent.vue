<template>
	<div class="bg-[#f0f0f0] w-full flex justify-between items-center px-3 py-2">
		<img
			src="https://media.licdn.com/dms/image/C510BAQFjaULATkW3cw/company-logo_200_200/0/1630567301263/qiscus_logo?e=1728518400&v=beta&t=0MvnNsuYfCorVLoQ9yUJxlWp-E0CMmbuOmFsWd77f4Y"
			alt="Qiscus Logo"
			class="rounded-full ml-1 w-10" />

		<div class="inline-flex items-center justify-center">
			<AccountIcon
				fillColor="#515151"
				class="mr-6"
				@click="$router.push('/private')" />

			<AccountGroupIcon
				fillColor="#515151"
				class="mr-6"
				@click="$router.push('/group')" />

			<MessageIcon
				fillColor="#515151"
				class="mr-6"
				@click="$router.push('/')" />
		</div>
	</div>
</template>

<script setup>
	import AccountGroupIcon from "vue-material-design-icons/AccountGroup.vue";
	import AccountIcon from "vue-material-design-icons/Account.vue";
	import MessageIcon from "vue-material-design-icons/Message.vue";
</script>
