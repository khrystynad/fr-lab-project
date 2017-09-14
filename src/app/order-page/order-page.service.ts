import { Injectable } from '@angular/core';
import { Order } from '../models/order-model';
import { Product } from '../models/product-model';

let quantity = 0;
let amount = 0;
let ORDERS = [];

@Injectable()
export class OrderService {

	getAll(): Promise<Order[]> {
		return Promise.resolve(ORDERS);
	}

	getItemIndex(item): number {
		return ORDERS.indexOf(item);
	}

	getQuantity(): number {
		return quantity;
	}

	getTotalAmount(): number {
		amount = 0;
		ORDERS.forEach(el => {
			amount += el.quantity * el.product.price;
		});
		return amount;
	}

	removeAll(): void {
		ORDERS.length = 0;
		quantity = 0;
		amount = 0;
	}

	removeItem(item): void {
		let index = this.getItemIndex(item);
		ORDERS.splice(index, 1);
	}

	incrementItemQuantity(item) {
		let index = this.getItemIndex(item);
		ORDERS[index].quantity++;
		quantity++;
	}

	decrementItemQuantity(item) {
		let index = this.getItemIndex(item);
		if (ORDERS[index].quantity > 1) {
			ORDERS[index].quantity--;
			quantity--;
		}
	}

	addItem(item: Product): void {
		let productId = item.id;
		let exists = false;
		ORDERS.forEach(el => {
			if (el.product.id == productId) {
				el.quantity++;
				quantity++;
				exists = true;
			}
		});
		if (!exists) {
			let productId = ORDERS.length;
			let newItem = new Order(productId, item, 1);
			ORDERS.push(newItem);
			quantity++;
		}
	}
}