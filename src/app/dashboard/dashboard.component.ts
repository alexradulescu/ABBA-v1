import { Component, OnInit } from '@angular/core';
import { TransferService } from '../common/transfer.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
	public transferList: any[];

	constructor(private transferService: TransferService) {}

	ngOnInit() {
		this.load();
	}

	public load() {
		this.transferService.getTransferList().subscribe(returnData => {
			this.transferList = returnData;
		});
	}
}
