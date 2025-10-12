import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule, 
    MatIconModule,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})

export class Header { 
  darkTheme = signal(false);

  isDarkTheme = computed(() => this.darkTheme());

  toggleTheme() {
    const isDark = !this.darkTheme();
    this.darkTheme.set(isDark);

    if (isDark) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    }
  }
}
