function getGender(value) {
    switch (value) {
        case '1':
            return 'Nam'
        case '2':
            return 'Nữ'
        case '3':
            return 'Không xác dịnh'

        default:
            return 'Không xác dịnh'
    }
}

export const LIST_GENDER = [
    {
        title: 'Nam',
        value: '1',
    },
    {
        title: 'Nữ',
        value: '2',
    },
    {
        title: 'Không xác dịnh',
        value: '3',
    },
]

export default getGender
