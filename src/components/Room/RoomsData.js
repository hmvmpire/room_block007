import React from "react";
import "./Table.scss";
import "./RoomsData.scss";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

const RoomsData = (props) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: getBackground(),
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const getBackground = () => {
    return "#" + Math.floor(Math.random() * 9469515).toString(16);
  };
  const { data } = props;
  console.log(data);
  const getRooms = () => {
    let x = [];
    for (let i = 0; i < props.data.length; i++) {
      x.push(
        <Grid item xs={data[i].position === "horizontal" ? 10 : 5}>
          <Item className={`${data[i].position}`}>
            {data[i].position === "horizontal" ? (
              <Grid container columns={12} columnSpacing={3}>
                {data[i].reserve === false ? (
                  <>
                    <Grid item xs={5}>
                      {data[i].name}
                    </Grid>
                    <Grid item xs={2}>
                      <Divider
                        className="divider"
                        orientation="vertical"
                        flexItem
                      />
                    </Grid>
                    <Grid item xs={5}>
                      {"Free"}
                    </Grid>
                  </>
                ) : (
                  <>
                    <Grid item xs={12}>
                      {" "}
                      {data[i].name}
                    </Grid>
                  </>
                )}
              </Grid>
            ) : (
              <Grid container columns={12} rowSpacing={3}>
                {data[i].reserve === false ? (
                  <>
                    <Grid item xs={12}>
                      {data[i].name}
                    </Grid>
                    <Grid item xs={12}>
                      <Divider flexItem />
                    </Grid>
                    <Grid item xs={12}>
                      {'Free'}
                    </Grid>
                  </>
                ) : (
                  <Grid item xs={12}>
                    {data[i].name}
                  </Grid>
                )}
              </Grid>
            )}
          </Item>
        </Grid>
      );
    }
    return x;
  };
  // console.log(props.data)
  return <>{getRooms()} </>;
};

export default RoomsData;
