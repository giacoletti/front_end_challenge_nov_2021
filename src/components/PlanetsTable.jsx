import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";

const PlanetsTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table data-cy="planets-table" sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell data-cy="pt-name-header">Planet Name</TableCell>
            <TableCell data-cy="pt-gravity-header" align="right">
              Gravity
            </TableCell>
            <TableCell data-cy="pt-diameter-header" align="right">
              Diameter
            </TableCell>
            <TableCell data-cy="pt-population-header" align="right">
              Population
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PlanetsTable;
