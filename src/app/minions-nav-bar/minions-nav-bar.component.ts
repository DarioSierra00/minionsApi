import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-minions-nav-bar',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './minions-nav-bar.component.html',
  styleUrl: './minions-nav-bar.component.css'
})
export class MinionsNavBarComponent {

  termino : string = ""

  constructor( private router: Router){}
  toGo(){
    this.router.navigate(['/infoMinion',this.termino])
  }
}
