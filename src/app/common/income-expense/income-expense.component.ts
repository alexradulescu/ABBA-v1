import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-income-expense',
	templateUrl: './income-expense.component.html'
})
export class IncomeExpenseComponent implements OnInit {
	@Input() incomeExpense: {
		title: string;
		category: string;
		amount: number;
	};

	constructor() {}

	ngOnInit() {
		// ...
	}
}
