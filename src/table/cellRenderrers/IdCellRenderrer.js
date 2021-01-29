import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import PropTypes from "prop-types";

class IdCellRenderrer extends Component {
  render() {
    const {
      data: { id },
      context: {
        componentParent: {
          state: { click, externalButtonClick }
        }
      },
      classes
    } = this.props;

    return id % 2 !== 0 ? (
      <span className={click ? classes.oddId : ""}>{id}</span>
    ) : (
      <span className={externalButtonClick ? classes.evenId : ""}>{id}</span>
    );
  }
}

IdCellRenderrer.proptypes = {
  id: PropTypes.number.isRequired
};

export default withStyles(styles)(IdCellRenderrer);
