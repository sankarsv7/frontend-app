import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-tutorial-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tutorial-list.component.html',
})
export class TutorialListComponent {

  tutorials: any[] = [];

  constructor(private tutorialService: TutorialService) {}

  ngOnInit() {
    this.tutorialService.getAllTutorials().subscribe((data: any[]) => {
      this.tutorials = data;
    });
}

}
