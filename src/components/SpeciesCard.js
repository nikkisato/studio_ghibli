import React from "react"
import Card from "@material-ui/core/Card"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: "300px",
    maxWidth: "500px",
  },
  header: {
    text: "50px",
    textAlign: "center",
    backgroundColor: "#eec0c6",
    backgroundImage: "linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%)",
  },

  avatar: {
    backgroundColor: "white",
    color: "black",
  },
}))

const SpeciesCard = ({ name, classification, eyeColor, hairColor }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardHeader title={name} className={classes.header} />

      <CardContent>
        <Typography>Classification: {classification}</Typography>
        <Typography>Eye Color: {eyeColor}</Typography>
        <Typography>Hair Color: {hairColor}</Typography>
      </CardContent>
    </Card>
  )
}

export default SpeciesCard
