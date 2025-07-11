import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule   
  ],
  templateUrl: './character-list.html',
  styleUrls: ['./character-list.scss']
})
export class CharacterListComponent {

  // El estudiante debe inyectar el servicio Api aquí

  // El estudiante debe declarar las propiedades aquí

  // El estudiante debe implementar ngOnInit aquí

  loadInitialCharacters(): void {
    throw new Error('Método no implementado');
  }

  onSearch(): void {
    throw new Error('Método no implementado');
  }

  onSearchKeyup(event: KeyboardEvent): void {
    // Este método ya está implementado, pero el estudiante debe asegurarse de que llama a onSearch()
    if (event.key === 'Enter') {
      this.onSearch();
    }
  }
}