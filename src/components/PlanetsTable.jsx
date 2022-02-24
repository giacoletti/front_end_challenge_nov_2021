import React, { useEffect, useState } from "react";
import Planets from "../modules/Planets";
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
  const [planets, setPlanets] = useState([]);

  const fetchPlanets = async () => {
    const response = await Planets.allPlanets();
    if (!response.message) {
      setPlanets(response);
    }
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const planetsRows = planets.map((planet) => {
    return (
      <TableRow
        key={planet.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {planet.name}
        </TableCell>
        <TableCell align="right">{planet.gravity}</TableCell>
        <TableCell align="right">{planet.diameter}</TableCell>
        <TableCell align="right">{planet.population}</TableCell>
      </TableRow>
    );
  });

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
        <TableBody data-cy="pt-body">{planetsRows}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default PlanetsTable;
