
export default function useCreateID(length = 10) {
	let id = ""
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

	for (let i = 0; i < length; i++) {
		id += characters.charAt(Math.floor(Math.random() * characters.length))
	}

	return id
}