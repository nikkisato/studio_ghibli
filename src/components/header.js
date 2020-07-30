import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  title: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
  headerDisplay: {
    display: "flex",
    flexDirection: "Row",
    backgroundColor: "#eec0c6",
    backgroundImage: "linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%)",
  },
  LinkList: {
    display: "flex",
    flexDirection: "Row",
    listStyleType: `none`,
    margin: "20px",
    justifyContent: "flex-end",
  },
  Links: {
    margin: "5px",
    textDecoration: `none`,
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <header>
      <div>
        <Typography variant="h4" className={classes.title}>
          <Link className={classes.Links} to="/">
            Studio Ghibli
          </Link>
        </Typography>
        <ul className={classes.LinkList}>
          <li>
            <Link className={classes.Links} to="/">
              Films
            </Link>
          </li>
          <li>
            <Link className={classes.Links} to="/people">
              People
            </Link>
          </li>
          <li>
            <Link className={classes.Links} to="/location">
              Locations
            </Link>
          </li>
          <li>
            <Link className={classes.Links} to="/species">
              Species
            </Link>
          </li>
          <li>
            <Link className={classes.Links} to="/vehicle">
              Vehicle
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
