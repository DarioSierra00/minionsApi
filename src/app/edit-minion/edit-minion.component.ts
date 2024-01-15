import { Component, Input, OnInit } from '@angular/core';
import { MinionsService } from '../services/minions.service';
import { Minion } from '../interfaces/minion';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-minion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-minion.component.html',
  styleUrl: './edit-minion.component.css'
})
export class EditMinionComponent implements OnInit {

  @Input() id: string = ""
  minion!: Omit<Minion, "id">

  constructor(private minionService: MinionsService) { }

  ngOnInit(): void {
    this.minionService.getMinionById(this.id).subscribe({
      next: min => this.minion = {
        name: min.name,
        bio: min.bio,
        birth: min.birth,
        img: min.img,
        side: min.side
      }
    })
  }

  editMinion(){
    this.minionService.editMinion(this.id,this.minion).subscribe()
  }
}
