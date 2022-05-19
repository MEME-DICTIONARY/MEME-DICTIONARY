import React from 'react';

function RadioInputForm({ inputList }) {
  return (
    <>
      {inputList.map((item) => (
        <>
          <input type="radio" name={item.name} value={item.value} onClick={item.onClick} />
          <label htmlFor={item.name}>{item.value}</label>
        </>
      ))}
    </>
  );
}

export default RadioInputForm;
