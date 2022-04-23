import React from "react";
import { Tag } from "antd";

function Tags({ tags }) {
  return tags.map((tag, index) => {
    return (
      <React.Fragment key={index}>
        <Tag color={tag.color} className="text-small mt-2">
          {tag.value.toUpperCase()}
        </Tag>
      </React.Fragment>
    );
  });
}

export default Tags;
