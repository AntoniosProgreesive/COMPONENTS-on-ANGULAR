import { Component } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  items: Item[] = []; // Αρχικοποίηση της λίστας αντικειμένων
  newItem: Item = { id: 0, name: '', description: '' }; // Αντικείμενο για προσθήκη

  // Προσθήκη νέου αντικειμένου στη λίστα
  addItem() {
    const id = this.items.length + 1;
    this.newItem.id = id;
    this.items.push({ ...this.newItem }); // Προσθήκη αντιγράφου του νέου αντικειμένου
    this.newItem = { id: 0, name: '', description: '' }; // Καθαρισμός της φόρμας
    this.saveToFile();
  }

  // Διαγραφή αντικειμένου από τη λίστα
  deleteItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
    this.saveToFile();
  }

  // Αποθήκευση σε αρχείο (για προσομοίωση εδώ χρησιμοποιείται απλή λογική)
  saveToFile() {
    const blob = new Blob([JSON.stringify(this.items, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'items.json';
    a.click();
  }
}
