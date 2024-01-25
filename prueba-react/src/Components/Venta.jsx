import React, { useEffect, useState } from "react";
import { Paper, Grid, TextField, Button } from "@mui/material";
import Cuotas from "./Cuotas";
const Venta = ({ CambioEstado, Enviar, TotalVenta, Form }) => {
  const [Cuota, setCuota] = useState([]);
  useEffect(() => {
    const Calcular = () => {
      const cuota = TotalVenta.Total / TotalVenta.Cuotas;
      const Cuotas = Array.from({ length: TotalVenta.Cuotas }, (_, index) => {
        const Pago = TotalVenta.Plazo / TotalVenta.Cuotas;
        return {
          cuota: cuota.toFixed(2),
          Pago: Math.round(Pago),
        };
      });
      setCuota(Cuotas);
    };
    Calcular();
  }, [TotalVenta]);
  return (
    <Grid item xs={6}>
      <div
        style={{
          marginLeft: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Paper
          container
          style={{
            backgroundColor: "#B5B2B2",
            width: "600px",
            padding: "20px",
          }}
          elevation={24}
        >
          <form
            ref={Form}
            style={{
              marginTop: "30px",
              marginLeft: "50px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              label="Digite el Id"
              name="Id"
              onChange={CambioEstado}
              style={{ marginBottom: "20px", width: "80%" }}
            />
            <TextField
              label="Digite el monto total"
              name="Total"
              onChange={CambioEstado}
              style={{ marginBottom: "20px", width: "80%" }}
            />
            <TextField
              label="Digite el plazo"
              name="Plazo"
              onChange={CambioEstado}
              style={{ marginBottom: "20px", width: "80%" }}
            />
            <TextField
              label="Digite la cuotas"
              name="Cuotas"
              onChange={CambioEstado}
              style={{ marginBottom: "20px", width: "80%" }}
            />
            <Cuotas Cuota={Cuota} />
            <Button
              style={{ marginTop: "20px" }}
              onClick={Enviar}
              variant="contained"
              color="primary"
            >
              Guardar
            </Button>
          </form>
        </Paper>
      </div>
    </Grid>
  );
};
export default Venta;
