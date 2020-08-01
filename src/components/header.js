import { Link } from "gatsby"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { node } from "prop-types"

const useStyles = makeStyles(theme => ({
  title: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
    color: " black",
    textDecoration: `none`,
  },

  headerDisplay: {
    display: "flex",
    flexDirection: "column",
    minWidth: "300px",
    backgroundColor: "#eec0c6",
    backgroundImage: "linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%)",
  },
  LinkList: {
    display: "flex",
    flexDirection: "Row",
    listStyleType: `none`,
    margin: "20px",
    justifyContent: "center",
  },
  Links: {
    margin: "5px",
    textDecoration: `none`,
    color: "White",
  },
  Button: {
    leftMargin: "15px",
    rightMargin: "15px;",

    hover: {
      color: "white",
    },
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <header>
      <div className={classes.headerDisplay}>
        <Typography variant="h4">
          <Link to="/" className={classes.title}>
            Studio Ghibli
          </Link>
        </Typography>
        <ul className={classes.LinkList}>
          <Button
            variant="contained"
            color="primary"
            className={classes.Button}
          >
            <Link className={classes.Links} to="/">
              Films
            </Link>
          </Button>
          <Button variant="contained" color="primary" className={classes.Button}>
            <Link className={classes.Links} to="/people">
              People
            </Link>
          </Button>

          <Button
            variant="contained"
            color="primary"
            className={classes.Button}
          >
            <Link className={classes.Links} to="/location">
              Locations
            </Link>
          </Button>
          <Button variant="contained" color="primary" className="Button">
            <Link className={classes.Links} to="/species">
              Species
            </Link>
          </Button>
          <Button variant="contained" color="primary" className="Button">
            <Link className={classes.Links} to="/vehicle">
              Vehicle
            </Link>
          </Button>
        </ul>
      </div>
    </header>
  )
}

export default Header
