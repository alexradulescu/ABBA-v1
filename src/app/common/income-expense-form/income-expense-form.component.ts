import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TransferService } from '../transfer.service';

@Component({
	selector: 'app-income-expense-form',
	templateUrl: './income-expense-form.component.html'
})
export class IncomeExpenseFormComponent implements OnInit {
	public title: string;
	public amount: number;
	public category: string;

	@Output() addedTransfer = new EventEmitter<boolean>();

	constructor(private transferService: TransferService) {}

	ngOnInit() {
		//...
	}

	addTransfer(type: string) {
		this.transferService
			.createTransfer({
				title: this.title,
				amount: this.amount,
				category: this.category,
				type: type
			})
			.subscribe(result => {
				console.log(result);
				this.addedTransfer.emit(true);
			});
	}
}
