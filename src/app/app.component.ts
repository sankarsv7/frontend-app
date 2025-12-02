import { Component } from '@angular/core';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TutorialListComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
