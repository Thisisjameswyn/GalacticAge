import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';

import GalAge from './../src/ageCalc.js';


$(document).ready(function() {
  let newAge = new GalAge(50);
  let mAge = newAge.getMerc();
  let vAge = newAge.getVenus();
  let marAge = newAge.getMars();
  let jAge = newAge.getJupiter();
  
  console.log(mAge[0],mAge[1]);
  console.log(vAge[0],vAge[1]);
  console.log(marAge[0],marAge[1]);
  console.log(jAge[0],jAge[1]);
});