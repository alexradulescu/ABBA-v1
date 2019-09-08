import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class TransferService {
	constructor(private http: HttpClient) {}

	public getTransferList() {
		return this.http
			.get('https://budget-74a10.firebaseio.com/transferList.json')
			.pipe(
				map(responseData => {
					const postsArray = [];
					for (const key in responseData) {
						if (responseData.hasOwnProperty(key)) {
							postsArray.push({ ...responseData[key], id: key });
						}
					}
					return postsArray;
				})
			);
	}

	public createTransfer(transfer: {
		title: string;
		category: string;
		type: string;
		amount: number;
	}) {
		return this.http.post(
			'https://budget-74a10.firebaseio.com/transferList.json',
			{
				title: transfer.title,
				category: transfer.category,
				type: transfer.type,
				amount: transfer.amount
			}
		);
	}
}
