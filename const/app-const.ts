export const textWhite = '#fff'

export enum ROLE {
	ADMIN = 'ADMIN',
	USER = 'USER'
}

export const PATH = {
	LOGIN: 'dang-nhap',
	REGISTER: 'dang-ky',
	FORGOT_PASSWORD: 'quen-mat-khau',
	PROFILE: 'thong-tin-ca-nhan',
	USER: 'user',
	ADMIN: 'admin',
	PRODUCT: 'san-pham',
	CART: 'gio-hang',
	ORDER: 'don-hang',
	WARRANTY: 'bao-hanh',
	CONFIRM_ACCOUNT: 'xac-nhan-tai-khoan'
}

export const STORAGE_KEY = {
	LOCAL_USER: 'beep',
	THEME: 'theme',
	SECTIONTHEME: 'sectionTheme'
}

export const API = `${process.env.be_url}/api`

export const SUPABASE_CONFIG = {
	URL: process.env.SUPABASE_URL as string,
	PUBKEY: process.env.SUPABASE_KEY as string
}

export const TOKEN_KEY = process.env.TOKEN_KEY as string

export enum STATUS_CODE {
	INVALID_METHOD = 405,
	CONFLICT = 409,
	CREATED = 201,
	OK = 200,
	NO_DATA = 204,
	FAILED = 400,
	INTERNAL = 500,
	MISSING_TOKEN = 403,
	AUTH_FAILED = 401
}

export enum METHOD {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	PATCH = 'PATCH',
	DELETE = 'DELETE'
}

export const RESPONSE_CODE = {
	FAILED: 400,
	AUTH_FAILED: 401,
	CREATED: 201,
	OK: 200,
	NOT_FOUND: 404,
	INTERNAL: 500,
	EXIST: 409
}

export const STORAGE = {
	LOCAL: 'local',
	SESSION: 'session'
}

export enum PRODUCTS_STATUS {
	NEW = 'Mới',
	SECOND_HAND = 'Đã qua sử dụng'
}

export const productStatusOptions = [
	{
		label: PRODUCTS_STATUS.NEW,
		value: PRODUCTS_STATUS.NEW
	},
	{
		label: PRODUCTS_STATUS.SECOND_HAND,
		value: PRODUCTS_STATUS.SECOND_HAND
	}
]

export enum PRODUCTS_CATEGORY {
	CASE = 'Vỏ case',
	PSU = 'Nguồn',
	COOLER = 'Tản nhiệt',
	CPU = 'CPU',
	RAM = 'RAM',
	MAIN = 'Mainboard',
	ACCESSORY = 'Phụ kiện'
}

export const productCategoryOptions = [
	{
		label: PRODUCTS_CATEGORY.CASE,
		value: PRODUCTS_CATEGORY.CASE
	},
	{
		label: PRODUCTS_CATEGORY.PSU,
		value: PRODUCTS_CATEGORY.PSU
	},
	{
		label: PRODUCTS_CATEGORY.COOLER,
		value: PRODUCTS_CATEGORY.COOLER
	},
	{
		label: PRODUCTS_CATEGORY.CPU,
		value: PRODUCTS_CATEGORY.CPU
	},
	{
		label: PRODUCTS_CATEGORY.RAM,
		value: PRODUCTS_CATEGORY.RAM
	},
	{
		label: PRODUCTS_CATEGORY.MAIN,
		value: PRODUCTS_CATEGORY.MAIN
	},
	{
		label: PRODUCTS_CATEGORY.ACCESSORY,
		value: PRODUCTS_CATEGORY.ACCESSORY
	}
]

export enum PAYMENT_STATUS {
	NOT_YET = 'Chưa thanh toán',
	DONE = 'Đã thanh toán'
}

export enum PAYMENT_METHOD {
	COD = 'Thanh toán khi nhận hàng',
	ONLINE = 'Online (Banking, Ví điện tử)'
}

export const PaymentMethodOptions = [
	{
		label: PAYMENT_METHOD.ONLINE,
		value: PAYMENT_METHOD.ONLINE
	},
	{
		label: PAYMENT_METHOD.COD,
		value: PAYMENT_METHOD.COD
	}
]

export const ORDER_STATUS = {
	WAITING_FOR_CONFIRM: 'Chờ xác nhận',
	CONFIRMED: 'Đã xác nhận',
	SHIPPING: 'Đang vận chuyển',
	CANCELED: 'Đã huỷ',
	DONE: 'Đã hoàn thành'
}

export const OrderStatusOptions = [
	{
		label: ORDER_STATUS.WAITING_FOR_CONFIRM,
		value: ORDER_STATUS.WAITING_FOR_CONFIRM
	},
	{
		label: ORDER_STATUS.CONFIRMED,
		value: ORDER_STATUS.CONFIRMED
	},
	{
		label: ORDER_STATUS.SHIPPING,
		value: ORDER_STATUS.SHIPPING
	},
	{
		label: ORDER_STATUS.CANCELED,
		value: ORDER_STATUS.CANCELED
	},
	{
		label: ORDER_STATUS.DONE,
		value: ORDER_STATUS.DONE
	}
]
