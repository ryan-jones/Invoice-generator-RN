import React from "react";
import TextFormInput from "./Inputs/TextInput";
import BillableRateInput from "./Inputs/BillableRateInput";

export default function FormInput(props) {
  switch (props.type) {
    case "currency":
      return <BillableRateInput {...props} />;
    case "text":
    case "date":
    default:
      return <TextFormInput {...props} />;
  }
}
