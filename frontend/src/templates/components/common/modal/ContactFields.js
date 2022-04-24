const fields = [
  {
    id: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Enter the name",
    required: true,
  },
  {
    id: "phoneNumber",
    label: "Phone Number",
    type: "text",
    maxLength: 10,
    placeholder: "Enter the phone number",
    required: true,
  },
  {
    id: "status",
    label: "Status",
    type: "dropdown",
    default: "Active",
    menu: [
      { label: "Active", id: "true" },
      { label: "Inactive", id: "false" },
    ],
  },
  {
    id: "location",
    label: "Location",
    type: "text",
    placeholder: "Enter the location",
  },
  {
    id: "organization",
    label: "Organization",
    type: "text",
    placeholder: "Enter the organization",
  },
  {
    id: "tags",
    label: "Tags",
    type: "multiselect",
  },
];

export default fields;
