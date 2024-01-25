import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormService } from './form.service';
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
  constructor(public Formulario: FormService) {}

  CambioEstado(event: any): void {
    const { name, value } = event.target;
    this.Formulario.totalVenta = { ...this.Formulario.totalVenta, [name]: value };

  }


}

