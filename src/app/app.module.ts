import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeExpenseComponent } from './common/income-expense/income-expense.component';
import { IncomeExpenseFormComponent } from './common/income-expense-form/income-expense-form.component';

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		IncomeExpenseComponent,
		IncomeExpenseFormComponent
	],
	imports: [BrowserModule, FormsModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
