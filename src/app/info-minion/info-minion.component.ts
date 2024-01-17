import { Component, Input, OnChanges } from '@angular/core';
import { Minion } from '../interfaces/minion';
import { MinionsService } from '../services/minions.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-info-minion',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './info-minion.component.html',
  styleUrl: './info-minion.component.css'
})
export class InfoMinionComponent implements OnChanges{
  @Input() name : string = ""
  minion! : Minion;

  constructor(private minionService : MinionsService){}

  ngOnChanges(){
      this.minionService.getMinionByName(this.name).subscribe({
        next : minion => this.minion = minion
      })
  }
  
}
