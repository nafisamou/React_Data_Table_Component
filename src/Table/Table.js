import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TableData from "./TableData";

const Table = () => {
  const [table, setTable] = useState();
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setTable(data));
  }, []);
  return (
    <div>
      {table?.map((tbl) => (
        <TableData key={tbl.id} tbl={tbl}></TableData>
      ))}
    </div>
  );
};

export default Table;
