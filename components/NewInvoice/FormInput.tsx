import React from "react";
import TextFormInput from "../Inputs/TextInput";
import BillableRateInput from "../Inputs/BillableRateInput";
import DateInput from "../Inputs/DateInput";
import SelectInput from "../Inputs/SelectInput";

export default function FormInput(props) {
	switch (props.type) {
		case "currency":
			return <BillableRateInput {...props} />;
		case "date":
			return <DateInput {...props} />;
		// case "select":
		//   return <SelectInput {...props} />;
		case "text":
		default:
			return <TextFormInput {...props} />;
	}
}
