import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { DomSanitizer } from '@angular/platform-browser';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatCardModule,
    MatProgressBarModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('onOff', [
      transition(':enter', [style({
        opacity: 0,
        transform: 'translateY(-100%)'
      }),
      animate(400)
      ])
    ])
  ]
})

export class AppComponent {
  selectedMenu = 1;
  title = 'chatBox';
  loadingLibrary = false;
  textPlaceholder: string = 'Query Internal Information';
  loaderIcon: string = '';
  loaderPlaceholder: string = '';

  constructor() {
  }

  menuChanged(menu: number) {
    this.selectedMenu = menu;
    this.loadingLibrary = true;
    setTimeout(() => {
      this.loadingLibrary = false
    }, 3000);
    switch (menu) {
      case 1:
        this.textPlaceholder = 'Query Internal Information';
        this.loaderPlaceholder = 'Internal Information';
        this.loaderIcon = 'menu_book';
        break;
      case 2:
        this.textPlaceholder = 'Query the web'
        this.loaderPlaceholder = 'Web Researcher'
        this.loaderIcon = 'language';
        break;
      case 3:
        this.textPlaceholder = 'Query GPT-4'
        this.loaderPlaceholder = 'GPT-4'
        this.loaderIcon = 'auto_awesome';
        break;

      default:
        break;
    }
  }
}
