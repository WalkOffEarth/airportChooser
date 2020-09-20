import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import VirtualizedList from "./VirtualizeList";
import styles from "./airportChooser.module.css";

const DropDown = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({ showHideList }));
  const { data, children, selected } = props;
  const [isOpenList, setIsOpenList] = useState(false);
  const [arrowClass, setArrowClass] = useState([styles.down]);

  useEffect(() => {
    setArrowClass(isOpenList ? [styles.up] : [styles.down]);
  }, [isOpenList]);

  function showHideList() {
    setIsOpenList(!isOpenList);
  }

  return (
    <div className={styles.listContainer}>
      <span className={styles.ddHeader} onClick={showHideList}>
        {selected && selected.name}
        <i className={[styles.arrow, ...arrowClass].join(" ")}></i>
      </span>
      <VirtualizedList
        numItems={data.length}
        itemHeight={30}
        windowHeight={200}
        show={isOpenList}
        renderItem={({ index, style }) => children(data[index], style)}
      ></VirtualizedList>
    </div>
  );
});

export default DropDown;
