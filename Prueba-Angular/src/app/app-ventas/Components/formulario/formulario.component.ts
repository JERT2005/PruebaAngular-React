// formulario.component.ts
import { Component } from '@angular/core';
import { FormService } from '../../../form.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  standalone: true,
  styleUrl: './formulario.component.css',
  imports:[NgFor,FormsModule]
})
export class FormularioComponent {
  constructor(public formulario: FormService) {}

  Enviar(): void {
    this.formulario.tabla.push({ ...this.formulario.totalVenta });
    this.formulario.totalVenta = { Id: '', Total: Number, Cuotas: Number, Plazo: Number };
    this.formulario.cuota = []
  }

  CalcularCuotas(): void {
    this.formulario.CalcularCuotas(); // Usa el método desde el servicio
  }
}
