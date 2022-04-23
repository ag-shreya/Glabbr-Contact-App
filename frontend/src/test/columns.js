import Avatar from "../templates/components/common/Avatar";
import CallActButtons from "../templates/components/common/CallActButtons";
import Tags from "../templates/components/common/Tags";
import UserDetails from "../templates/components/common/UserDetails";

export const columns = [
  {
    dataIndex: "avatar",
    key: "avatar",
    className: "ps-5",
    render: (text) => <Avatar />,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <UserDetails name={record.name} organization={record.organization} />
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (text) => <p className="text-desc">{text}</p>,
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
    render: (text) => <p className="text-desc">{text}</p>,
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => <Tags tags={tags} />,
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => <CallActButtons record={record} />,
  },
];
