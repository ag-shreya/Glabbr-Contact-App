import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

function UserAvatar(props) {
  return (
    <Avatar icon={<UserOutlined />} />
  )
}

export default UserAvatar