// Code EyesOnMe Component Here
import React from "react";

export default function EyesOnMe() {
  return (
    <div>
      <button
        onBlur={() => {
          console.log("Hey! Eyes on me!");
        }}
        onFocus={() => {
          console.log("Good!");
        }}
      >
        Eyes on me
      </button>
    </div>
  );
}
