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

    $("#ageOutput").text(`Wild!  It says here that you are ${inputAge} on earth.  Did you know that you are ${mAge[0]} on Mercury?  Hot Stuff!
    I bet you also probably didn't know you are ${vAge[0]} on Venus.  Well don't worry too much if those numbers make you feel over the hill,
    you're only ${marAge[0]} on Mars, and only ${jAge[0]} on Juptiter!  That's not even old enough to buy beer.

    If that bit about how old you are has you down, then buckle up for some more info.  Based on average life expectancy of 80 years, it looks
    like you only have ${mAge[1] -mAge[0]} years left on Mercury, maybe less depending on how much sunscreen you take.  ${vAge[1] -vAge[0]} years
    is what you'd have left if you also had a Venusian zip code.  Mars gets a bit more depressing with only a measly ${marAge[1] -marAge[0]} years
    left for you there.  Finally Jupiter, I don't think you want to know, it would be too cruel to tell you.  But I am just a program of logic and
    numbers, and my job is to tell you that you have only ${jAge[1] -jAge[0]} years left.  I'll notify the undertaker that you'll be visiting soon.`);
  });
});
