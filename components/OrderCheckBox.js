import React, { useState } from "react";
import { CheckBox } from "react-native-elements";

export default function OrderCheckBox({}) {
  const [checkedState, setCheckedState] = useState(false);

  const handleOnChange = (e) => {
    setCheckedState(!checkedState);
  };

  return (
    <CheckBox right size={40} checked={checkedState} onPress={handleOnChange} />
  );
}
