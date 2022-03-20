import React from 'react';
import Table from './Table.js';

const Room = () => {
  return (
    <>
      <div className='workRoom'>
        <div className='firstPlace'>
          <div className='firstPlace__first'>
            <Table />
          </div>
          <div className='firstPlace__first'>
            <Table />
          </div>
          <div className='firstPlace__first'>
            <Table />
          </div>
          <div className='firstPlace__first'>
            <Table />
          </div>
          <div className='firstPlace__first'>
            <Table />
          </div>
          <div className='firstPlace__first'>
            <Table />
          </div>
        </div>

        <div className='secondPlace'>
          <div className='secondPlace__second'>
            <button></button>
          </div>
          <div className='secondPlace__third'>
            <button></button>
          </div>
          <div className='secondPlace__fourth'>
            <button></button>
          </div>
          <div className='secondPlace__fifth'>
            <button></button>
          </div>
          <div className='secondPlace__sixt'>
            <button></button>
          </div>
        </div>
        <div className='thirdPlace'>
          <div className='thirdPlace__second'>
            <button></button>
          </div>
          <div className='thirdPlace__third'>
            <button></button>
          </div>
          <div className='thirdPlace__fourth'>
            <button></button>
          </div>
          <div className='thirdPlace__fifth'>
            <button></button>
          </div>
          <div className='thirdPlace__sixt'>
            <button></button>
          </div>
        </div>
        <div className='fourthPlace'>
          <div className='fourthPlace__second'>
            <button></button>
          </div>
          <div className='fourthPlace__third'>
            <button></button>
          </div>
          <div className='fourthPlace__fourth'>
            <button></button>
          </div>
          <div className='fourthPlace__fifth'>
            <button></button>
          </div>
          <div className='fourthPlace__sixt'>
            <button></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Room;
