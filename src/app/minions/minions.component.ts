import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Minion } from '../interfaces/minion';
import { MinionsService } from '../services/minions.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable, catchError, ignoreElements, of } from 'rxjs';

@Component({
  selector: 'app-minions',
  standalone: true,
  imports: [RouterOutlet,RouterLink,AsyncPipe],
  templateUrl: './minions.component.html',
  styleUrl: './minions.component.css'
})
export class MinionsComponent implements OnInit{
  @Input() id : string = ""
  minions$! : Observable<Minion[]>;
  error : boolean = false
  minionErrors$! : Observable<any>
  errorMessage : any = null

  constructor(private minionService : MinionsService){}

  ngOnInit(): void {
    this.minions$ = this.minionService.getMinions();
    this.minionErrors$ = this.minions$.pipe(
      ignoreElements(),
      catchError((err) => of(err))
    )
  }

  delete(idMin : number){
    this.minionService.deleteMinion(idMin).subscribe({
      // next : () => this.minions$ = this.minions$.filter((minion) => minion.id !== idMin)
    })
    
  }
  
}
