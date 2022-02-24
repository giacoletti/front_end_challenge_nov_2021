import { gql } from "@apollo/client";
import client from "./apollo";

const Planets = {
  async allPlanets() {
    try {
      const { data } = await client.query({
        query: gql`
          query Planets {
            allPlanets {
              planets {
                id
                name
                gravity
                diameter
                population
              }
            }
          }
        `
      });
      return data.allPlanets.planets;
    } catch (error) {
      // handle errors
    }
  }
};

export default Planets;
