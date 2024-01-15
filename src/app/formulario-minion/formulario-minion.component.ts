import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Minion } from '../interfaces/minion';
import { MinionsService } from '../services/minions.service';

@Component({
  selector: 'app-formulario-minion',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './formulario-minion.component.html',
  styleUrl: './formulario-minion.component.css'
})
export class FormularioMinionComponent {
  minion! : Omit<Minion, "id">

  constructor(private minionService : MinionsService){
    this.minion = {
      name : "",
      bio : "",
      birth : "",
      img : "",
      side : ""
    }
  }

  addMinion(){
    //if(this.minion){
      this.minionService.addMinion(this.minion).subscribe()
    //}
  }
}
