import DataTable from "react-data-table-component";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [perPage, setPage] = useState(10);

  const caseInsensitiveSort = (rowA, rowB) => {
    const a = rowA.first_name.toLowerCase();
    const b = rowB.last_name.toLowerCase();

    if (a > b) {
      return 1;
    }

    if (b > a) {
      return -1;
    }

    return 0;
  };
  const columns = [
    { name: "id", selector: (row) => row.id },
   
    /*  {
      when: row => row.status < 300,
      style: row => ({ backgroundColor: row.status ? 'red' : 'green' }),
    }, */
    { name: "first_name", selector: (row) => row.first_name, sortable: true },
    { name: "last_name", selector: (row) => row.last_name, sortable: true },
    { name: "email", selector: (row) => row.email, sortable: true },
    { name: "gender", selector: (row) => row.gender, sortable: true },
    { name: "ip_address", selector: (row) => row.ip_address, sortable: true },
    { name: "airportCode", selector: (row) => row.airportCode, sortable: true },
    { name: "time", selector: (row) => row.time, sortable: true },
    { name: "status", selector: (row) => row.status, sortable: true },
    { name: "mobile", selector: (row) => row.mobile, sortable: true },
    { name: "area", selector: (row) => row.area, sortable: true },
    { name: "show", selector: (row) => row.show, sortable: true },
    { name: "edit", selector: (row) => row.edit, sortable: true },
  ];

  useEffect(() => {
    fetchTableData();
  }, []);
  async function fetchTableData() {
    setLoading(true);
    const URL = "fakeData.json";
    const response = await fetch(URL);
    const users = await response.json();
    setData(users);
    setLoading(false);
  }

  return (
    <div className="w-11/12 mx-auto">
  
      <DataTable
        title="MOCK_DATA-1"
        columns={columns}
        data={data}
        progressPending={loading}
        pagination
        // fixedHeader
        caseInsensitiveSort={caseInsensitiveSort}
        selectableRows
        selectableRowsHighlight
      />
    </div>
  );
}

export default App;
