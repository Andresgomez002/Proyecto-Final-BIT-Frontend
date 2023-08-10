import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private readHistory: any[] = [];
  private storageKey = 'readHistory';
  item: any;

  addToReadHistory(card: any) {
    const history = this.getReadHistory();
    history.push(card);
    localStorage.setItem(this.storageKey, JSON.stringify(history));
  }

  getReadHistory() {
    const historyString = localStorage.getItem(this.storageKey);
    return historyString ? JSON.parse(historyString) : [];
  }
  removeFromReadHistory(productId: string) {
    const history = this.getReadHistory();
    const updatedHistory = history.filter((item: { _id: string; }) => item._id !== productId);
    localStorage.setItem(this.storageKey, JSON.stringify(updatedHistory));
  }
  
  constructor() { }
}
