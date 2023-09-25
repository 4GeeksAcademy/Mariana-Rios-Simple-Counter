import React from "react";
import "../../styles/index.css";

const SecondsCounter = () => {
    let count = 0;
    setInterval(()=>{ 
        count++; 
        console.log(count);
        document.querySelector(".digit1").innerHTML = (Math.floor(count/1)) % 10;
        document.querySelector(".digit2").innerHTML = (Math.floor(count/10)) % 10;
        document.querySelector(".digit3").innerHTML = (Math.floor(count/100)) % 10;
        document.querySelector(".digit4").innerHTML = (Math.floor(count/1000)) % 10;
        document.querySelector(".digit5").innerHTML = (Math.floor(count/10000)) % 10;
        document.querySelector(".digit6").innerHTML = (Math.floor(count/100000)) % 10;

    }, 1000);
    
    //did style in-line because my index.css file is only applying one class at a time. I don't know why its not working and I had a session with a mentor and he didn't know what was wrong with it either. 
    return(
        <div style={{display:"flex", gap:"1rem", justifyContent:"center", alignItems:"center"}} className="digitContainer">
            <i style={{fontSize:"2rem"}} className="fa-regular fa-clock"></i>
            <div  className="digit digit6"></div>
            <div  className="digit digit5"></div>
            <div  className="digit digit4"></div>
            <div  className="digit digit3"></div>
            <div  className="digit digit2"></div>
            <div  className="digit digit1"></div>
        </div>
    );
};

export default SecondsCounter;

