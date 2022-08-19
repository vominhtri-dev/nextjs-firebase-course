function level(value) {
	switch (value) {
		case 1:
			return 'Mới bắt đầu'
		case 2:
			return 'Nâng cao'
		case 3:
			return '"Thiếu nhi"'

		default:
			return 'Mới bắt đầu'
	}
}

export const LIST_LEVEL = [
	{
		title: 'Mới bắt đầu',
		value: 1,
	},
	{
		title: 'Nâng cao',
		value: 2,
	},
	{
		title: '"Thiếu nhi"',
		value: 3,
	},
]

export default level
