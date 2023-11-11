import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  @Input() color: string = '#007bff';
  @Input() progress: number = 0;
  @Input() textColor: string = '#007bff'; 
  @Input() fillColor: string = '#007bff';

}
