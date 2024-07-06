"use client";

const DrinksError = (error) => {
    console.log(error);
  return <div>{error.error.message}</div>;
};
export default DrinksError;
