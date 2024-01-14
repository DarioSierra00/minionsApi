import { Component, Input, OnChanges } from '@angular/core';
import { MinionsService } from '../services/minions.service';
import { Minion } from '../interfaces/minion';

@Component({
  selector: 'app-info-minion-id',
  standalone: true,
  imports: [],
  templateUrl: './info-minion-id.component.html',
  styleUrl: './info-minion-id.component.css'
})
export class InfoMinionIdComponent implements OnChanges{
  @Input() id : string = ""
  minions! : Minion[]
  constructor(private minionService : MinionsService){}

  ngOnChanges(): void {
    this.minionService.getMinionById(this.id).subscribe({
      next : min => this.minions = min
    })
  }
}
