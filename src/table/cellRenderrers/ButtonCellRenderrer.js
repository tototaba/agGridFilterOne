import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/styles";
import styles from "./styles";

class ButtonCellRenderrer extends Component {
  constructor(props) {
    super(props);
    this.updateGrid = this.updateGrid.bind(this);
  }

  updateGrid() {
    this.props.context.componentParent.updateGrid(this.props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Button
        variant="outlined"
        className={classes.tableButton}
        color="primary"
        onClick={this.updateGrid}
      >
        Highlight_Odd_Id
      </Button>
    );
  }
}

export default withStyles(styles)(ButtonCellRenderrer);
