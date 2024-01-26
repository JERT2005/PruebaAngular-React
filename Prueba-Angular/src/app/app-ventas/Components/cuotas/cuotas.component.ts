// cuotas.component.ts
import { Component } from '@angular/core';
import { FormService } from '../../../form.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-cuotas',
  templateUrl: './cuotas.component.html',
  styleUrl: './cuotas.component.css',
  imports: [NgFor],
  standalone: true,
})
export class CuotasComponent {
  constructor(public Formulario: FormService) {}
}
