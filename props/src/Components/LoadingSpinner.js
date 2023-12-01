import React from "react";

export default function LoadingSpinner({ size }) {
  if (size != null) {
    return <p>size = {size}</p>;
  } else {
    size = 15;
    return <p>size = {size}</p>;
  }
}
// this code above is works but there is a more concise way to do that.

function LoadingSpinner2({ size = 15 }) {
  return <p>Size = {size}</p>;
}
//Here, if size isn't provided, it defaults to 15.
