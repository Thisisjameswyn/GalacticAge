import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';

import GalAge from './../src/ageCalc.js';


$(document).ready(function() {
  $("#solarForm").submit(function(event) {
    event.preventDefault();
    const inputAge = $("#ageInput").val();
    let newAge = new GalAge(inputAge);
    let mAge = newAge.getMerc();
    let vAge = newAge.getVenus();
    let marAge = newAge.getMars();
    let jAge = newAge.getJupiter();

    
  });
});