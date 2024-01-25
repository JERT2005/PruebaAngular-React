import React, { useState, useRef } from "react";

import TablaDeCalculos from "./Tabla";
import Venta from "./Venta";

const PruebaVentas = () => {
  const [Tabla, setTabla] = useState([]);

  //USESTATES
  const [TotalVenta, SetTotalVenta] = useState({
    Total: 0,
    Cuotas: 0,
    Plazo: 0,
  });
  //Funcion para manejar los cambios de Las ventas
  const CambioEstado = (event) => {
    const { name, value } = event.target;
    SetTotalVenta((prevTotalVenta) => ({
      ...prevTotalVenta,
      [name]: value,
    }));
  };

  const EliminarRegistro = (index) => {
    const registrosRestantes = Tabla.filter((_, i) => i !== index);
    setTabla(registrosRestantes);
  };
  //Funcion la cual envia a la tabla de calculos la ultima venta montada en el sistema y resetea el formulario cada que agrega un nuevo registro
  const Form = useRef();
  const Enviar = () => {
    setTabla((prevTabla) => [...prevTabla, TotalVenta]);
    SetTotalVenta({
      Id: "",
      Total: 0,
      Cuotas: 0,
      Plazo: 0,
    });
    Form.current.reset();
  };
  //este useeffect reconoce los cambios de valores en las ventas para poder calcular y mostrar de manera automatica el numero de cuotas

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <TablaDeCalculos Tabla={Tabla} EliminarRegistro={EliminarRegistro} />
      <Venta
        Enviar={Enviar}
        CambioEstado={CambioEstado}
        TotalVenta={TotalVenta}
        SetTotalVenta={SetTotalVenta}
        Form={Form}
      />
    </div>
  );
};

export default PruebaVentas;
