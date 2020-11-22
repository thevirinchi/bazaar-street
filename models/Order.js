import Moment from 'moment'

class Order {
	constructor(id, items, amount, date) {
		this.id = id
		this.items = items
		this.amount = amount
		this.date = date
	}

	get stringDate() {
		console.log("formating")
		return Moment(this.date).format('Do MMMM YYYY, hh:mm')
	}
}

export default Order