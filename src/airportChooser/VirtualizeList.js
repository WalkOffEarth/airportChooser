import React, { useState } from "react";
const VirtualizedList = (props) => {
  const { numItems, itemHeight, renderItem, windowHeight, show } = props;
  const [scrollTop, setScrollTop] = useState(0);

  const innerHeight = numItems * itemHeight;
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    numItems - 1,
    Math.floor((scrollTop + windowHeight) / itemHeight)
  );

  const items = [];
  for (let i = startIndex; i <= endIndex; i++) {
    items.push(
      renderItem({
        index: i,
        style: {
          position: "absolute",
          top: `${i * itemHeight}px`,
          width: "100%",
        },
      })
    );
  }

  const onScroll = (e) => setScrollTop(e.currentTarget.scrollTop);
  return (
    <div
      style={{ overflowY: "scroll", display: show ? "block" : "none" }}
      onScroll={onScroll}
    >
      <div style={{ position: "relative", height: `${innerHeight}px` }}>
        {items}
      </div>
    </div>
  );
};

export default VirtualizedList;
