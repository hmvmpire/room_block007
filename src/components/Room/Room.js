import React from "react";
import Table from "./Table.js";
import { useParams } from "react-router-dom";

import Grid from "@mui/material/Grid";

import { Settings } from "@mui/icons-material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ModalPopUp from "./modal.js";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateRangePicker from "@mui/lab/DateRangePicker";
import Box from "@mui/material/Box";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";



const Room = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const params = useParams();
  const roomId = params.roomId ? params.roomId : 0;
  const [series, setSeries] = React.useState(false);
  const [value, setValue] = React.useState([null, null]);
 
  let x = [
    {
      room: "One",
      tables: {
        column: 2,
        tableData: [
          [
            { name: "BJR", position: "horizontal", reserve: true },
            { name: "BKR", position: "vertical", reserve: false },
            { name: "VJw", position: "vertical", reserve: true },
            { name: "FOR", position: "vertical", reserve: false },
            { name: "BLM", position: "vertical", reserve: false },
            { name: "PER", position: "vertical", reserve: true },
            { name: "GtR", position: "vertical", reserve: false },
          ],
          [
            { name: "GJR", position: "vertical", reserve: false },
            { name: "GwR", position: "vertical", reserve: true },
            { name: "BeR", position: "vertical", reserve: false },
            { name: "KKR", position: "vertical", reserve: false },
            { name: "VJR", position: "vertical", reserve: true },
            { name: "FJR", position: "vertical", reserve: false },
            { name: "BPR", position: "vertical", reserve: false },
            { name: "FHR", position: "vertical", reserve: false },
            { name: "BLR", position: "vertical", reserve: false },
            { name: "EER", position: "vertical", reserve: true },
          ],
        ],
      },
    },
    {
      room: "two",
      tables: {
        column: 2,
        tableData: [
          [
            { name: "FJR", position: "vertical", reserve: false },
            { name: "BLR", position: "vertical", reserve: true },
            { name: "EER", position: "vertical", reserve: false },
            { name: "GJR", position: "vertical", reserve: false },
          ],
          [
            { name: "GJR", position: "vertical", reserve: false },
            { name: "GJR", position: "vertical", reserve: true },
            { name: "BJR", position: "vertical", reserve: false },
            { name: "BKR", position: "vertical", reserve: true },
          ],
        ],
      },
    },
    {
      room: "three",
      tables: {
        column: 1,
        tableData: [
          [
            { name: "FJR", position: "vertical", reserve: true },
            { name: "BLR", position: "vertical", reserve: false },
            { name: "EER", position: "vertical", reserve: false },
            { name: "GJR", position: "vertical", reserve: true },
          ],
        ],
      },
    },

    {
      room: "Four",
      tables: {
        column: 2,
        tableData: [
          [
            { name: "FJR", position: "vertical", reserve: false },
            { name: "BLR", position: "vertical", reserve: false },
            { name: "EER", position: "vertical", reserve: true },
            { name: "GJR", position: "vertical", reserve: false },
            { name: "BLR", position: "vertical", reserve: false },
            { name: "EER", position: "vertical", reserve: false },
          ],
          [
            { name: "FJR", position: "vertical", reserve: false },
            { name: "BLR", position: "vertical", reserve: true },
            { name: "EER", position: "vertical", reserve: false },
            { name: "GJR", position: "vertical", reserve: true },
          ],
        ],
      },
    },
  ];
  const [rooms,setRooms]=React.useState(x);
  const changeReservation=(roomName ,tableName)=>{
   
    rooms.forEach((data,index)=>{
      if(data.room===roomName){
        data.tables.tableData.forEach((tableArr,TableIndex)=>{
          tableArr.forEach((table,tableNoIndex)=>{
            if(table.name===tableName){
              
              rooms[index].tables.tableData[TableIndex][tableNoIndex].reserve=!rooms[index].tables.tableData[TableIndex][tableNoIndex].reserve;
              console.log(rooms);  
              let arr=[...rooms]
              setRooms(arr);
              
            }
          })
        })
      }
    })
  }
  return (
    <>
      <div className="workRoom">
        <div className="firstPlace">
          <Grid container column={12} spacing={2}>
            <Grid item xs={8}>
              <Table changeReserve={(roomName,tableName)=>{changeReservation(roomName,tableName)}} data={rooms[roomId]} />
            </Grid>
            <Grid item xs={4}>
              <div className="whitBack">
                <Grid
                  justifyContent={"center"}
                  alignItems={"center"}
                  container
                  column={12}
                  gap={3}>
                  <Grid item xs={12}>
                    <Grid
                      justifyContent={"center"}
                      alignItems={"center"}
                      container
                      column={12}
                      spacing={2}>
                      <Grid item xs={9}>
                        <h3>Favourites</h3>
                      </Grid>
                      <Grid item xs={3}>
                        <Settings onClick={handleOpen} />
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <Grid
                      justifyContent={"center"}
                      alignItems={"center"}
                      container
                      column={12}
                      spacing={2}>
                      <Grid item xs={10}>
                        <Button variant="contained">Room 45</Button>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <Grid
                      justifyContent={"center"}
                      alignItems={"center"}
                      container
                      column={12}
                      spacing={2}>
                      <Calendar />
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    {series === true ? (
                      <Grid
                        justifyContent={"center"}
                        alignItems={"center"}
                        container
                        column={12}
                        spacing={2}>
                        <Grid item xs={10}>
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateRangePicker
                              startText="Check-in"
                              endText="Check-out"
                              value={value}
                              onChange={(newValue) => {
                                setValue(newValue);
                              }}
                              renderInput={(startProps, endProps) => (
                                <React.Fragment>
                                  <TextField {...startProps} />
                                  <Box sx={{ mx: 2 }}> to </Box>
                                  <TextField {...endProps} />
                                </React.Fragment>
                              )}
                            />
                          </LocalizationProvider>
                        </Grid>
                      </Grid>
                    ) : (
                      <Grid
                        justifyContent={"center"}
                        alignItems={"center"}
                        container
                        column={12}
                        spacing={2}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DesktopDatePicker
                            label="Date "
                            inputFormat="MM/dd/yyyy"
                            value={value}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
                      </Grid>
                    )}
                  </Grid>

                  <Grid item xs={12}>
                    <Grid
                      justifyContent={"center"}
                      alignItems={"center"}
                      container
                      column={12}>
                      <Grid item xs={11}>
                        <Button
                          onClick={() => setSeries(!series)}
                          size="large"
                          variant="outlined">
                          Series{" "}
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <Grid
                      justifyContent={"center"}
                      alignItems={"center"}
                      container
                      column={12}>
                      <Grid item xs={2}>
                        <Button variant="outlined" size="small">
                          M
                        </Button>
                      </Grid>
                      <Grid item xs={2}>
                        <Button variant="outlined" size="small">
                          T
                        </Button>
                      </Grid>
                      <Grid item xs={2}>
                        <Button variant="outlined" size="small">
                          W
                        </Button>
                      </Grid>
                      <Grid item xs={2}>
                        <Button variant="outlined" size="small">
                          T
                        </Button>
                      </Grid>
                      <Grid item xs={2}>
                        <Button variant="outlined" size="small">
                          F
                        </Button>
                      </Grid>
                      <Grid item xs={2}>
                        <Button variant="outlined" size="small">
                          S
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <Grid
                      justifyContent={"center"}
                      alignItems={"center"}
                      container
                      column={12}
                      spacing={2}>
                      <Grid item xs={5}>
                        <Button variant="contained">Morning</Button>
                      </Grid>
                      <Grid item xs={5}>
                        <Button variant="contained">After noon</Button>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <Grid
                      justifyContent={"center"}
                      alignItems={"center"}
                      container
                      column={12}>
                      <Grid item xs={11}>
                        <Button size="large" variant="outlined">
                          Booking{" "}
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
        <ModalPopUp setOpen={setOpen} open={open} />
      </div>
    </>
  );
};

export default Room;

// <img  alt="ok" src={require('./../../assets/building.jpg')} />
