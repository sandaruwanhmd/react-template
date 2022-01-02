import React from 'react';
import {SampleActions} from '../../Actions/index';
import { useDispatch } from "react-redux";

function Footer() {
    const dispatch = useDispatch();
    const handleClickOne = () => {
        dispatch(SampleActions.sampleActionOne());
    }
    const handleClickTwo = () => {
        dispatch(SampleActions.sampleActionTwo());
    }
  return (
    <div className='Footer-container'>
        <span onClick={() => handleClickOne()}>Houston, Texas, United States</span>
        <span onClick={() => handleClickTwo()}>Contact: +94778544777</span>
        <span>Email: sandaruwanhmd@gmail.com</span>
    </div>
  );
}

export default Footer;
