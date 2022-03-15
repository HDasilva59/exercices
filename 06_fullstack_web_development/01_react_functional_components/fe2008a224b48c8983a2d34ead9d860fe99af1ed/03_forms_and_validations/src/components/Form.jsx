import React, { useState } from "react";

const Form = () => {
  const [error, setError] = useState(false);

  function verifyInput(event) {
    const value = event.target.value;

    if (value.includes(" ")) {
      setError(<p>no spaces allowed</p>);
      return true;
    } else {
      setError(false);
      return false;
    }
  }

  function verifySubmit() {
    console.log(document.getElementById("uech").value);
  }

  return (
    <div>
      <form onSubmit={verifySubmit}>
        <label>First Name</label>
        <input id="uech" onChange={verifyInput} type="text" name="FistName" />
        <button type="submit">Submit</button>
      </form>
      {error}
    </div>
  );
};

export default Form;
