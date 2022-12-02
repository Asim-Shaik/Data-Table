import React, { useState } from "react";
import Table, { SelectColumnFilter, StatusPill } from "./Table";
import "./styles.css";
import axios from "axios";

export default function TableComponent() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const data = await axios.get("http://localhost:5000");
    const result = JSON.stringify(data.data);
    const jsonData = JSON.parse(result);
    setData(jsonData);
  };

  //create columns based on the data
  const columns = React.useMemo(
    () => [
      {
        Header: "capsule_serial",
        accessor: "capsule_serial",
      },
      {
        Header: "landings",
        accessor: "landings",
      },
      {
        Header: "original_launch",
        accessor: "original_launch",
      },
      {
        Header: "capsule_id",
        accessor: "capsule_id",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: StatusPill,
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "type",
        accessor: "type",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
    ],
    []
  );

  //useMemo to prevent rerenders
  React.useMemo(() => getData(), []);
  return (
    <>
      <div className="m-10">
        <Table columns={columns} data={data} />
      </div>
    </>
  );
}
