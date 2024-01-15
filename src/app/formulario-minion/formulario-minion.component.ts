import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Minion } from '../interfaces/minion';
import { MinionsService } from '../services/minions.service';

@Component({
  selector: 'app-formulario-minion',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './formulario-minion.component.html',
  styleUrl: './formulario-minion.component.css'
})
export class FormularioMinionComponent implements OnInit {
  minion!: Omit<Minion, "id">
  @Input() id: string = ""

  constructor(private minionService: MinionsService) {
    this.minion = {
      name: "",
      bio: "",
      birth: "",
      img: "",
      side: ""
    }
  }
  ngOnInit(): void {
    if (this.id) {
      this.minionService.getMinionById(this.id).subscribe({
        next: (min) => this.minion = {
          name: min.name,
          bio: min.bio,
          birth: min.birth,
          img: min.img,
          side: min.side
        }   
      })
    }
  }
  addMinionOrEdit() {
    if (this.id) {
      this.minionService.editMinion(this.id, this.minion).subscribe()
    } else {
      this.minionService.addMinion(this.minion).subscribe()
    }
  }
}
