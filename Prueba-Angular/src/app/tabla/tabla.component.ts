// tabla.component.ts
import { Component } from '@angular/core';
import { FormService } from '../form.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css',
  standalone: true,
  imports: [NgFor],
 
})
export class TablaComponent {
  constructor(public Formulario: FormService) {}

  EliminarRegistro(index: number): void {
    this.Formulario.tabla.splice(index, 1);
  }
}
