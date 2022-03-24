import React from "react";
import "./Table.scss";
import "./tableData.scss";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

const TableData = (props) => {
  
  const { data } = props;

  const getRooms = () => {
    let x = [];
    for (let i = 0; i < props.data.length; i++) {
      x.push(
        <Grid onClick={()=>{props.changeReserve(props.roomName,props.data[i].name)}} item xs={data[i].position === "horizontal" ? 10 : 5}>
          <div className={`${data[i].position}`}>
            {data[i].position === "horizontal" ? (
              <Grid container justifyContent={'center'} columns={12}>
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
                    <Grid item xs={12}>
                      {props.data.roomName}
                  </Grid>
                  </>
                ) : (
                  <>
                    <Grid item xs={12}>
                      {" "}
                      {data[i].name}
                    </Grid>
                    <Grid item xs={12}>
                      {props.data.roomName}
                  </Grid>
                  </>
                )}
                <Grid style={{height:'10px'}} item xs={12}>
                <div className="roomName">{props.roomName}</div>
                 </Grid>
              </Grid>
            ) : (
             
              <Grid container justifyContent={'space-between'} gap={1} alignItems={'space-between'} columns={12} >
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
                  <>
                  <Grid item xs={12}>
                    {data[i].name}
                  </Grid>
                  
              </>
                  
                )}
                <>
                 <Grid  item xs={12}>
                 <div className="roomName">{props.roomName}</div>
                 </Grid>
                </> 
              </Grid>
              
              
            )}
          </div>
        </Grid>
      );
    }
    return x;
  };
  // console.log(props.data)
  return <>{getRooms(props.data)} </>;
};

export default TableData;
