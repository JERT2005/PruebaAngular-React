import React from "react";
import {
  Paper,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TablaDeCalculos = ({Tabla, EliminarRegistro }) => {
  return (
    <Grid style={{ marginLeft: "100px", marginTop: "60px" }} item xs={6}>
      <Typography style={{ paddingRight: "32px" }} textAlign={"center"}>
        Calculos{" "}
      </Typography>
      <TableContainer component={Paper} style={{ backgroundColor: "#B5B2B2" }}>
        <Table style={{ width: "300px" }}>
          <TableHead>
            <TableRow>
              <TableCell>Eliminar</TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Cuotas</TableCell>
              <TableCell>Plazo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Tabla.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <IconButton onClick={() => EliminarRegistro(index)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
                <TableCell>{item.Id}</TableCell>
                <TableCell>{item.Total}</TableCell>
                <TableCell>{item.Cuotas}</TableCell>
                <TableCell>{item.Plazo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};
export default TablaDeCalculos;
