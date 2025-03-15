import { Component, OnInit } from '@angular/core';
import { PersonajesService } from './servicios/personajes.service'; 
import { CommonModule } from '@angular/common'; 

import { CardComponent } from './componentes/card/card.component';

@Component({
  selector: 'app-root',
  imports: [CardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  personajes: any[] = []; 
  constructor(private personajesService: PersonajesService) {}

  ngOnInit(): void {
    this.personajesService.getPersonajes().subscribe(data => {
      this.personajes = data.results; 
    });
  }
}
