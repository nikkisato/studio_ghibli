import React from "react"
import Layout from "../components/layout"
import Card from "../components/Card"
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

const IndexPage = ({
  data: {
    allGhibliFilm: { edges: Film },
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
        title="Film"
      />
      <br></br>
      <Grid container spacing={1}>
        {Film.map(({ node }) => (
          <Grid container item xs={12} md={6} lg={4}>
            <Paper className={classes.paper} key={node.id}>
              <Card
                title={node.title}
                description={node.description}
                director={node.director}
                producer={node.producer}
                releaseDate={node.release_date}
                score={node.rt_score}
                url={node.url}
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
    allGhibliFilm {
      edges {
        node {
          id
          title
          description
          director
          producer
          release_date
          rt_score
          url
        }
      }
    }
  }
`
export default IndexPage
