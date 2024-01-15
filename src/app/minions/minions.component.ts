import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Minion } from '../interfaces/minion';
import { MinionsService } from '../services/minions.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-minions',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './minions.component.html',
  styleUrl: './minions.component.css'
})
export class MinionsComponent implements OnInit{
  @Input() id : string = ""
  minions! : Minion[];

  constructor(private minionService : MinionsService){}

  ngOnInit(): void {
    this.minionService.getMinions().subscribe({
     next:  minion => this.minions = minion
    })
  }

  delete(idMin : number){
    this.minionService.deleteMinion(idMin).subscribe({
      next : () => this.minions = this.minions.filter((minion) => minion.id !== idMin)
    })
    
  }
  
}
