import { Component, OnInit } from '@angular/core';
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

  minions! : Minion[];

  constructor(private minionService : MinionsService){}

  ngOnInit(): void {
    this.minionService.getMinions().subscribe({
     next:  minion => this.minions = minion
    })
  }

  
}
