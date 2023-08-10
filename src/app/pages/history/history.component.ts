import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit{
  readHistory: any[] = [];

  constructor(private historyService: HistoryService) {}

  ngOnInit(): void {
    this.readHistory = this.historyService.getReadHistory();
  }
  removeFromHistory(productId: string): void {
    this.historyService.removeFromReadHistory(productId);
    this.readHistory = this.historyService.getReadHistory();
  }
}
