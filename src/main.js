import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';

import GalAge from './../src/ageCalc.js';


$(document).ready(function() {
  let newAge = new GalAge(50);
  
  console.log(newAge.getMerc());
  console.log(newAge.getVenus());
  console.log(newAge.getMars());
  console.log(newAge.getJupiter());
});