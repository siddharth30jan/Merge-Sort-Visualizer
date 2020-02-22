import React, { useState, useEffect } from "react";
import { getMergeSortAnimations } from "./MergeSort";
const Sorting = () => {
  const [arr, setArr] = useState([]);
  const [noOfBars, setNoOfBars] = useState(30);
  const generateArr = () => {
    let temp = [];
    for (let i = 0; i < noOfBars; i++) {
      temp.push(randomIntFromInterval(5, 730));
    }
    setArr(temp);
  };
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const mergeSort = () => {
    let animation = getMergeSortAnimations(arr);
    for (let i = 0; i < animation.length; i++) {
      let temp = document.getElementsByClassName("my-arr");
      //console.log(temp);
      if (i % 3 != 2) {
        //Change color

        if (i % 3 == 0) {
          setTimeout(() => {
            let cordinates = animation[i];
            temp[cordinates[0]].style.background = "red";
            temp[cordinates[1]].style.background = "red";
          }, 5 * i);
        } else {
          setTimeout(() => {
            let cordinates = animation[i];
            console.log(cordinates);
            temp[cordinates[0]].style.background = "grey";
            temp[cordinates[1]].style.background = "grey";
          }, 5 * i);
        }
      } else {
        //Actual change
        setTimeout(() => {
          let cordinates = animation[i];
          console.log(cordinates);
          temp[cordinates[0]].style.height = `${cordinates[1]}px`;
        }, 5 * i);
      }
    }
  };

  useEffect(() => {
    generateArr();
  }, []);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div
          onClick={generateArr}
          style={{ cursor: "pointer", background: "blue", width: "300px" }}
        >
          <h1>Generate random array</h1>
        </div>
        <div
          onClick={mergeSort}
          style={{ cursor: "pointer", background: "red", width: "300px" }}
        >
          <h1>Merge Sort</h1>
        </div>
        <div style={{ cursor: "pointer", background: "pink", width: "300px" }}>
          <h1>Enter no of bars </h1>
          <input
            type="number"
            onChange={e => {
              setNoOfBars(e.target.value);
              generateArr();
            }}
          />
        </div>
      </div>
      <div style={{ margin: "5px", display: "flex" }}>
        {arr.map(x => {
          return (
            <div
              className="my-arr"
              style={{
                height: `${x}px`,
                backgroundColor: "grey",
                width: "10px",
                margin: "0px 2px"
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Sorting;
