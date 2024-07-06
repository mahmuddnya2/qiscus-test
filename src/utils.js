import { ref } from "vue";

export let open = ref(false);
export let openGroup = ref(false);
export let openPrivate = ref(false);

const dumpData = {
	results: {
		room: {
			name: "Product A",
			id: 12456,
			image_url: "https://picsum.photos/id/237/200/300",
			participant: [
				{
					id: "admin@mail.com",
					name: "Admin",
					role: 0,
				},
				{
					id: "agent@mail.com",
					name: "Agent A",
					role: 1,
				},
				{
					id: "customer@mail.com",
					name: "king customer",
					role: 2,
				},
			],
		},
		comments: [
			{
				id: 885512,
				type: "text",
				message: "Selamat malam",
				sender: "customer@mail.com",
			},
			{
				id: 885513,
				type: "text",
				message: "Malam",
				sender: "agent@mail.com",
			},
			{
				id: 885514,
				type: "text",
				message: "Ada yang bisa saya bantu?",
				sender: "agent@mail.com",
			},
			{
				id: 885515,
				type: "text",
				message:
					"Saya ingin mengirimkan bukti pembayaran, karena diaplikasi selalu gagal",
				sender: "customer@mail.com",
			},
			{
				id: 885516,
				type: "text",
				message: "Baik, silahkan kirimkan lampiran bukti pembayarannya",
				sender: "agent@mail.com",
			},
			{
				id: 885515,
				type: "image",
				message: "Ini adalah bukti pembayarannya",
				image_url: "https://picsum.photos/id/237/200/300",
				sender: "customer@mail.com",
			},
		],
	},
};

export const data = dumpData.results;
