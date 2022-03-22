import React from "react";
import "./Table.scss";
import "./RoomsData.js";
import RoomsData from "./RoomsData.js";

import Grid from "@mui/material/Grid";

const Table = (props) => {
  const columns = props.data.column;

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
          style={{
            width: "280px",
            background: "yellow",
            height: "fit-content",
          }}
          container>
          <RoomsData data={props.data.tableData[i]} />
        </Grid>
      );
    }
    return cols;
  };
  return <div className="tableOne">{getColumns()}</div>;
};

export default Table;
