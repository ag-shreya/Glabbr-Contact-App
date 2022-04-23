import React from "react";
import { Button, Tooltip } from "antd";
import { StarOutlined } from "@ant-design/icons";
import CallActButtons from "../common/CallActButtons";
import Avatar from "../common/Avatar";
import UserDetails from "../common/UserDetails";

function FavCard() {
  return (
    <div className="card border-0 p-3 pb-4">
      {/* Card header */}
      <div className="card-header bg-white py-4 row">
        {/* User Avatar */}
        <div className="col-auto">
          <Avatar />
        </div>

        {/* User Name + org */}
        <div className="col-8 mb-2">
          <UserDetails name="Julia Golmes" organization="Zencorporation" />
        </div>

        {/* Favorite Btn */}
        <div className="col-auto">
          <Tooltip title="favorite">
            <Button shape="circle" icon={<StarOutlined />} size="small" />
          </Tooltip>
        </div>
      </div>

      {/* Card Body */}
      <div className="card-body py-0">
        {/* Status */}
        <p className="m-0 text-desc pt-4">Active</p>
        <p className="text-desc">San Francisco, USA</p>

        {/* Action Btns */}
        <CallActButtons />
      </div>
    </div>
  );
}

export default FavCard;
