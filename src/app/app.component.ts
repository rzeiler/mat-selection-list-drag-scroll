import { Component } from '@angular/core';
import data from '../assets/data.json';

export interface Section {
  Name: string;
  Email: string;
  Inc: string;
  Phone: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MatSelectionListDragScroll';
  sections: Section[] = data;
}
