import { TextField } from "@mui/material";
import React from "react";

const Cuotas = ({ Cuota }) => {
  return (
    <>
      {Cuota.map((e, index) => (
        <TextField
          key={index}
          label={`Valor de la Cuota ${index + 1}`}
          defaultValue={[e.cuota]}
          InputProps={{
            readOnly: true,
          }}
          style={{ marginBottom: "20px", width: "80%" }}
        />
      ))}
    </>
  );
};
export default Cuotas;
