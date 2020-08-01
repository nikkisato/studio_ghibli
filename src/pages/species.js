import React from "react"
import Layout from "../components/layout"
import Card from "../components/SpeciesCard"
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

const SpeciesPage = ({
  data: {
    allGhibliSpecies: { edges: Species },
  },
}) => {
  const classes = useStyles()
  return (
    <Layout>
      <CardHeader className={classes.SectionTitle} item title="Species" />
      <br></br>
      <Grid container spacing={4} className={classes.centerGrid}>
        {Species.map(({ node }) => (
          <Grid item xs={12} sm={8} md={6} lg={3} key={node.id}>
          <Paper className={classes.paper}>
              <Card
                name={node.name}
                classification={node.classification}
                eyeColor={node.eye_colors}
                hairColor={node.hair_colors}
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
    allGhibliSpecies {
      edges {
        node {
          id
          name
          classification
          eye_colors
          hair_colors
        }
      }
    }
  }
`
export default SpeciesPage
