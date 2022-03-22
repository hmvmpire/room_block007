import React from 'react';
import './Table.scss'
import './RoomsData.scss'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const RoomsData = (props) => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: getBackground(),
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    const getBackground=()=>{
       return '#'+Math.floor(Math.random()*9469515).toString(16);
    }
    const {data}=props
    console.log(data)
   const getRooms=()=>{
       let x=[]
      for(let i=0;i<props.data.length;i++){
         x.push(
         <Grid  item xs={data[i].position==='horizontal' ? 10 : 5}>
            <Item className={`${data[i].position}`} >{data[i].name}</Item>
          </Grid>
         )} 
      return x
   }
 // console.log(props.data)
  return (<>{getRooms()} </>
  );
};

export default RoomsData;
