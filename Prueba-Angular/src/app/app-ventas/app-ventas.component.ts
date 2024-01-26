import { Component } from '@angular/core';
import { TablaComponent } from './Components/tabla/tabla.component';
import { CuotasComponent } from './Components/cuotas/cuotas.component';
import { FormularioComponent } from './Components/formulario/formulario.component';
@Component({
  selector: 'app-app-ventas',
  standalone: true,
  imports: [TablaComponent,CuotasComponent, FormularioComponent],
  templateUrl: './app-ventas.component.html',
  styleUrl: './app-ventas.component.css'
})
export class AppVentasComponent {

}
