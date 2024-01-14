import { Component, Input, OnChanges } from '@angular/core';
import { Minion } from '../interfaces/minion';
import { MinionsService } from '../services/minions.service';

@Component({
  selector: 'app-info-minion',
  standalone: true,
  imports: [],
  templateUrl: './info-minion.component.html',
  styleUrl: './info-minion.component.css'
})
export class InfoMinionComponent implements OnChanges{
  @Input() name : string = ""
  minions! : Minion[];

  constructor(private minionService : MinionsService){}

  ngOnChanges(){
      this.minionService.getMinionByName(this.name).subscribe({
        next : minion => this.minions = minion
      })
  }
  
}
