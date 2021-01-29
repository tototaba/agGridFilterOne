import React, { Component } from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import axios from "axios";
import ButtonCellRenderrer from "./cellRenderrers/ButtonCellRenderrer";
import IdCellRenderrer from "./cellRenderrers/IdCellRenderrer";

import { withStyles } from "@material-ui/styles";

import styles from "./styles";
import columnDefs from "./colDefs";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";

const url = "https://jsonplaceholder.typicode.com/todos";
class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: columnDefs,
      rowData: [],
      click: false,
      externalButtonClick: false,
      context: { componentParent: this },
      frameworkComponents: {
        buttonCellRenderrer: ButtonCellRenderrer,
        idCellRenderrer: IdCellRenderrer
      },
      value: "",
      isLoading: true
    };
    this.onGridReady = this.onGridReady.bind(this);
    this.doesExternalFilterPass = this.doesExternalFilterPass.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get(url).then((response) => {
      this.setState({ rowData: response.data, isLoading: false });
    });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
  }

  handleChange(e) {
    this.setState({ value: e.target.value }, () => {
      this.gridApi.onFilterChanged();
    });
  }

  doesExternalFilterPass(node) {
    return node.data.title.indexOf(this.state.value) > -1;
  }

  render() {
    const { columnDefs, rowData, value, isLoading } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <span className={classes.spinner}>
          {isLoading && <CircularProgress />}
        </span>
        {!isLoading && (
          <div className={classes.root}>
            <span className={classes.titleFilter}>
              <TextField
                label="Title Filter"
                value={value}
                onChange={this.handleChange}
                margin="normal"
              />
            </span>
            <span className={classes.evenIdButton}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() =>
                  this.setState(
                    (oldState) => ({
                      externalButtonClick: !oldState.externalButtonClick
                    }),
                    () => this.gridApi.refreshCells({ force: true })
                  )
                }
              >
                Highlight_Even_Id
              </Button>
            </span>

            <div
              style={{ height: "1000px", width: "100%" }}
              className="ag-theme-balham"
            >
              <AgGridReact
                animateRows={true}
                columnDefs={columnDefs}
                rowData={rowData}
                onGridReady={this.onGridReady}
                rowHeight={40}
                context={this.state.context}
                frameworkComponents={this.state.frameworkComponents}
                isExternalFilterPresent={() => true}
                doesExternalFilterPass={this.doesExternalFilterPass}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
  updateGrid(props) {
    this.setState({ click: !this.state.click }, () =>
      props.api.refreshCells({ force: true })
    );
  }
}

export default withStyles(styles)(Table);
