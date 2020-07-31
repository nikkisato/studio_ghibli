import React from "react"
import Layout from "../components/layout"
import Card from "../components/PeopleCard"
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

const PeoplePage = ({
  data: {
    allGhibliPerson: { edges: Person },
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
        title="People"
      />
      <br></br>
      <Grid container spacing={1}>
        {Person.map(({ node }) => (
          <Grid container item xs={12} md={6} lg={4}>
            <Paper className={classes.paper} key={node.id}>
              <Card
                gender={node.gender}
                PersonName={node.name}
                age={node.age}
                eye={node.eye_color}
                hair={node.hair_color}
                films={node.films}
                species={node.species}
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
    allGhibliPerson {
      edges {
        node {
          id
          name
          gender
          age
          eye_color
          hair_color
          films
          species
        }
      }
    }
  }
`
export default PeoplePage
