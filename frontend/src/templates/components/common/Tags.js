import React from "react";
import { Tag } from "antd";

function Tags({ tags }) {
  tags = tags.replace("{", "[").replace("}", "]");
  tags = JSON.parse(tags);

  const getColor = (tag) => {
    if (tag === "client") return "blue";
    if (tag === "workshop") return "green";
    if (tag === "internal works") return "red";
    if (tag === "boardroom") return "default";
    return "black";
  };
  if (tags && tags.length)
    return tags.map((tag, index) => (
      <React.Fragment key={index}>
        <Tag color={getColor(tag)} className="text-small mt-2">
          {tag.toUpperCase()}
        </Tag>
        {index >= 1 && index % 2 ? <div className="mt-2"></div> : ""}
      </React.Fragment>
    ));
}

export default Tags;
