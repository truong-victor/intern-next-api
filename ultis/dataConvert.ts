export function formatDate(inputDateStr: string) {
	const inputDate = new Date(inputDateStr)
	const day = inputDate.getDate()
	const month = inputDate.getMonth() + 1
	const year = inputDate.getFullYear()

	// Kiểm tra các giá trị ngày và tháng để thêm số 0 nếu cần thiết
	const formattedDay = day < 10 ? `0${day}` : day
	const formattedMonth = month < 10 ? `0${month}` : month

	// Trả về chuỗi đã được định dạng
	return `${formattedDay}/${formattedMonth}/${year}`
}

export function formatTime(inputTimeStr: string) {
	// Cắt chuỗi để lấy giá trị giờ và phút
	const timeParts = inputTimeStr.slice(11, 16).split(':')
	const hours = timeParts[0]
	const minutes = timeParts[1]

	// Trả về chuỗi đã được định dạng
	return `${hours}:${minutes}`
}

export function removeMark(str: string) {
	str = str.toLowerCase()
	str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a')
	str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e')
	str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i')
	str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o')
	str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u')
	str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y')
	str = str.replace(/(đ)/g, 'd')
	str = str.replace(/([^0-9a-z-\s])/g, '')
	str = str.replace(/(\s+)/g, '-')
	str = str.replace(/^-+/g, '')
	str = str.replace(/-+$/g, '')
	return str
}

export function removeSpecial(inputString: string): string {
	const pattern = /[^a-zA-Z0-9]/g
	const processedString = inputString.replace(pattern, '')
	return processedString
}
