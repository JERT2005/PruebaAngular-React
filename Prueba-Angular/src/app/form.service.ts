import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }
  totalVenta: any = {
    Id: '',
    Total: 0,
    Cuotas: 0,
    Plazo: 0,
  };
  tabla: any[] = [];
  cuota: any[] = [];
  CalcularCuotas(): void {
    const cuota = this.totalVenta.Total / this.totalVenta.Cuotas;
    this.cuota = Array.from({ length: this.totalVenta.Cuotas }, (_, index) => {
      const pago = this.totalVenta.Plazo / this.totalVenta.Cuotas;
      return {
        cuota: cuota.toFixed(2),
        pago: Math.round(pago),
      };
    });
  }
}


