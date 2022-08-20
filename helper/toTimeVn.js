export default function toTimeVn(date) {
	const options = {
		// weekday: "long",
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
	}
	const dateFullDay = new Date(date.toDate()).toLocaleDateString(
		'vi-VN',
		options
	)
	return dateFullDay
}

export function toDateVn(date) {
	const options = {
		// weekday: "long",
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
	}
	const dateFullDay = new Date(date.toDate()).toLocaleString('vi-VN')
	return dateFullDay
}
