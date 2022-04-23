import React from "react";
import { Tag } from "antd";

function Tags({ tags }) {
  return tags.map((tag, index) => {
    return (
      <React.Fragment key={index}>
        <Tag color={tag.color} className="text-small">
          {tag.value.toUpperCase()}
        </Tag>
        {index >= 1 && index % 2 ? <div className="mt-2"></div> : ""}
      </React.Fragment>
    );
  });
}

export default Tags;
