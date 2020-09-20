import React, { useState, useRef } from "react";
import DropDown from "./DropDown";
import styles from "./airportChooser.module.css";

function AirportChooser({ data, onAirportSelection }) {
  const ddRef = useRef();
  const [showList, setShowList] = useState(false);
  const [selected, setSelected] = useState({});
  function showHideList() {
    setShowList(!showList);
  }
  function onSelection(e) {
    const code = e.currentTarget.attributes["data-value"].value;
    const selectedAirport = data.find((item) => item.code === code);
    setSelected(selectedAirport);
    ddRef.current.showHideList();
    onAirportSelection && onAirportSelection(selectedAirport);
  }

  return (
    <div className={styles.container}>
      <button className={styles.btnChooseAirports} onClick={showHideList}>
        Choose Airport
      </button>
      {showList ? (
        <DropDown ref={ddRef} data={data} selected={selected}>
          {(item, style) => Item(item, style, selected, onSelection)}
        </DropDown>
      ) : null}
    </div>
  );
}

const Item = (item, style, selected, onSelection) => {
  return (
    <div
      data-value={item.code}
      key={item.code}
      style={
        selected && selected.code === item.code
          ? { ...style, backgroundColor: "black", color: "white" }
          : { ...style }
      }
      className={styles.listItem}
      onClick={onSelection}
    >
      <div>{item.name}</div>
      <div>{item.city}</div>
      <div>{item.country}</div>
      <div>{item.code}</div>
    </div>
  );
};

export default AirportChooser;
