import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { CuotasComponent } from './cuotas/cuotas.component';
import { TablaComponent } from './tabla/tabla.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormularioComponent,CuotasComponent,TablaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// prueba-ventas.component.ts
export class AppComponent {
  constructor() {}
}

