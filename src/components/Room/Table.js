import React from "react";
import "./Table.scss";
import "./TableData.js";
import TableData from "./TableData.js";

import Grid from "@mui/material/Grid";

const Table = (props) => {
  console.log('hello')
  const columns = props.data.tables.column;


  const getColumns = () => {
    let cols = [];
    for (let i = 0; i < columns; i++) {
      cols.push(
        <Grid
          columns={12}
          direction="row"
          gap={2}
          justifyContent="space-around"
          alignItems="center"
          className="col-tab"
          container>
          <TableData changeReserve={props.changeReserve} roomName={props.data.room} data={props.data.tables.tableData[i]} />
        </Grid>
      );
    }
    return cols;
  };
  return <div className="tableOne">{getColumns(props.data)}</div>;
};

export default Table;
