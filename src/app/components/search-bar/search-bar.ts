import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatButtonModule, MatIconModule, FormsModule],
  templateUrl: './search-bar.html',
  styleUrls: ['./search-bar.scss'],
})
export class SearchBar {
  searchText = signal('');

  @Output() search = new EventEmitter<string>();

  onSearch() {
    const value = this.searchText();
    if (value && value.trim().length > 0) {
      this.search.emit(value.trim());
      // opcional: limpar o input
      // this.searchText.set('');
    }
  }
}
