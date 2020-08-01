import React from "react"
import Layout from "../components/layout"
import Card from "../components/VehicleCard"
import { graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import CardHeader from "@material-ui/core/CardHeader"

const useStyles = makeStyles({
  list: { listStyleType: `none` },
  Title: {
    fontSize: "50px",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
  },
  wrapping: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  SectionTitle: {
    display: "flex",
    justifyContent: "Center",
    backgroundColor: "#eec0c6",
    backgroundImage: "linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%)",
    textAlign: "Center",
  },
})

const VehiclePage = ({
  data: {
    allGhibliVehicle: { edges: Vehicle },
  },
}) => {
  const classes = useStyles()
  return (
    <Layout>
      <CardHeader className={classes.SectionTitle} item title="People" />
      <br></br>
      <Grid container spacing={4} className={classes.centerGrid}>
        {Vehicle.map(({ node }) => (
          <Grid item xs={12} sm={8} md={6} lg={3} key={node.id}>
          <Paper className={classes.paper}>
              <Card
                name={node.name}
                description={node.description}
                vehicleClass={node.vehicle_class}
                length={node.length}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}
export const query = graphql`
  query {
    allGhibliVehicle {
      edges {
        node {
          id
          name
          description
          vehicle_class
          length
        }
      }
    }
  }
`
export default VehiclePage
