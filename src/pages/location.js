import React from "react"
import Layout from "../components/layout"
import Card from "../components/LocationCard"
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

const Location = ({
  data: {
    allGhibliLocation: { edges: Location },
  },
}) => {
  const classes = useStyles()
  return (
    <Layout>
      <CardHeader
        className={classes.SectionTitle}
        item
        xs={12}
        md={6}
        lg={4}
        title="Location"
      />
      <br></br>
      <Grid container spacing={4}>
        {Location.map(({ node }) => (
          <Grid item xs={12} sm={8} md={6} lg={3} key={node.id}>
          <Paper className={classes.paper}>
              <Card
                name={node.name}
                climate={node.climate}
                terrain={node.terrain}
                surfaceWater={node.surface_water}
                residents={node.residents}
                films={node.films}
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
    allGhibliLocation {
      edges {
        node {
          id
          name
          climate
          terrain
          surface_water
          residents
          films
        }
      }
    }
  }
`
export default Location
