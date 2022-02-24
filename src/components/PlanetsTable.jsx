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
  const [ascending, setAscending] = useState(true);

  const fetchPlanets = async () => {
    const response = await Planets.allPlanets();
    if (!response.message) {
      setPlanets(response);
    }
  };

  const orderByDiameter = () => {
    const array = [...planets];
    if (ascending) {
      setPlanets(
        array.sort((a, b) => {
          return a.diameter - b.diameter;
        })
      );
    } else {
      setPlanets(
        array.sort((a, b) => {
          return b.diameter - a.diameter;
        })
      );
    }
    setAscending(!ascending);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const planetsRows = planets.map((planet, index) => {
    return (
      <TableRow
        key={planet.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {planet.name}
        </TableCell>
        <TableCell align="right">{planet.gravity}</TableCell>
        <TableCell data-cy={`pt-diameter-${index}`} align="right">
          {planet.diameter}
        </TableCell>
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
            <TableCell
              onClick={orderByDiameter}
              data-cy="pt-diameter-header"
              align="right"
            >
              <span style={{ cursor: "pointer" }}>Diameter</span>
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
