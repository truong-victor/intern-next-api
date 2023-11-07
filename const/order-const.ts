interface itemButton{
  color: string
  title: string
  status: 'CONFIRM' | 'CANCELED' | 'DONE' | 'SHIPPING'
}

export const buttonStatus = {
  WAITING: [
    { color: 'blue', title: 'Xác nhận', status: 'CONFIRM'} as itemButton,
    { color: 'red', title: 'Hủy', status: 'CANCELED'} as itemButton
  ],
  CONFIRM: [
    { color: 'blue', title: 'Giao hàng', status: 'SHIPPING'} as itemButton,
    { color: 'red', title: 'Hủy', status: 'CANCELED'} as itemButton
  ],
  SHIPPING: [
    { color: 'blue', title: 'Thành công', status: 'DONE'} as itemButton,
    { color: 'red', title: 'Hủy', status: 'CANCELED'} as itemButton
  ],
  CANCELED: [
    { color: 'blue', title: 'Thành công', status: 'DONE'} as itemButton,
    { color: 'red', title: 'Hủy', status: 'CANCELED'} as itemButton
  ],
  DONE: [
    { color: 'blue', title: 'Thành công', status: 'DONE'} as itemButton,
    { color: 'red', title: 'Hủy', status: 'CANCELED'} as itemButton
  ]
}