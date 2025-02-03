import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Tooltip, IconButton, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

const DetailedViewHistory = () => {
  const rows = [
    {
      id: 1,
      date: "01-02-2025",
      description: "Descripción de la prueba",
      col1: "Valor1",
      col2: "Valor2",
      col3: "Valor3",
      addedBy: "Alejandro",
    },
    {
      id: 2,
      date: "02-02-2025",
      description: "Descripción de la prueba",
      col1: "Valor5",
      col2: "Valor6",
      col3: "Valor7",
      addedBy: "Josué",
    },
    {
      id: 3,
      date: "03-02-2025",
      description: "Descripción de la prueba",
      col1: "Valor5",
      col2: "Valor6",
      col3: "Valor7",
      addedBy: "Zaida",
    },
    {
      id: 4,
      date: "04-02-2025",
      description: "Descripción de la prueba",
      col1: "Valor7",
      col2: "Valor8",
      col3: "Valor9",
      addedBy: "Raúl",
    },
    {
      id: 5,
      date: "05-02-2025",
      description: "Descripción de la prueba",
      col1: "Valor10",
      col2: "Valor11",
      col3: "Valor12",
      addedBy: "Alejandro",
    },
    {
      id: 6,
      date: "06-02-2025",
      description: "Descripción de la prueba",
      col1: "Valor13",
      col2: "Valor14",
      col3: "Valor15",
      addedBy: "Josué",
    },
    {
      id: 7,
      date: "07-02-2025",
      description: "Descripción de la prueba",
      col1: "Valor16",
      col2: "Valor17",
      col3: "Valor18",
      addedBy: "Zaida",
    },
    {
      id: 8,
      date: "08-02-2025",
      description: "Descripción de la prueba",
      col1: "Valor19",
      col2: "Valor20",
      col3: "Valor21",
      addedBy: "Raúl",
    },
    {
      id: 9,
      date: "09-02-2025",
      description: "Descripción de la prueba",
      col1: "Valor22",
      col2: "Valor23",
      col3: "Valor24",
      addedBy: "Alejandro",
    },
    {
      id: 10,
      date: "10-02-2025",
      description: "Descripción de la prueba",
      col1: "Valor25",
      col2: "Valor26",
      col3: "Valor27",
      addedBy: "Josué",
    },
    {
      id: 11,
      date: "11-02-2025",
      description: "Descripción de la prueba",
      col1: "Valor28",
      col2: "Valor29",
      col3: "Valor30",
      addedBy: "Zaida",
    },
    {
      id: 12,
      date: "12-02-2025",
      description: "Descripción de la prueba",
      col1: "Valor31",
      col2: "Valor32",
      col3: "Valor33",
      addedBy: "Raúl",
    },
    {
      id: 13,
      date: "13-02-2025",
      description: "Descripción de la prueba",
      col1: "Valor34",
      col2: "Valor35",
      col3: "Valor36",
      addedBy: "Alejandro",
    },
    {
      id: 14,
      date: "14-02-2025",
      description: "Descripción de la prueba",
      col1: "Valor37",
      col2: "Valor38",
      col3: "Valor39",
      addedBy: "Josué",
    },
    {
      id: 15,
      date: "15-02-2025",
      description: "Descripción de la prueba",
      col1: "Valor40",
      col2: "Valor41",
      col3: "Valor42",
      addedBy: "Zaida",
    },
    {
      id: 16,
      date: "16-02-2025",
      description: "Descripción de la prueba",
      col1: "Valor43",
      col2: "Valor44",
      col3: "Valor45",
      addedBy: "Raúl",
    },
    {
      id: 17,
      date: "17-02-2025",
      description: "Descripción de la prueba",
      col1: "Valor46",
      col2: "Valor47",
      col3: "Valor48",
      addedBy: "Alejandro",
    },
    {
      id: 18,
      date: "18-02-2025",
      description: "Descripción de la prueba",
      col1: "Valor49",
      col2: "Valor50",
      col3: "Valor51",
      addedBy: "Josué",
    },
    {
      id: 19,
      date: "19-02-2025",
      description: "Descripción de la prueba",
      col1: "Valor52",
      col2: "Valor53",
      col3: "Valor54",
      addedBy: "Zaida",
    },
    {
      id: 20,
      date: "20-02-2025",
      description: "Descripción de la prueba",
      col1: "Valor55",
      col2: "Valor56",
      col3: "Valor57",
      addedBy: "Raúl",
    },
    {
      id: 21,
      date: "21-02-2025",
      description: "Descripción de la prueba",
      col1: "Valor55",
      col2: "Valor56",
      col3: "Valor57",
      addedBy: "Zaida",
    },
    {
      id: 22,
      date: "22-02-2025",
      description: "Descripción de la prueba",
      col1: "Valor55",
      col2: "Valor56",
      col3: "Valor57",
      addedBy: "Josué",
    },
    {
      id: 23,
      date: "23-02-2025",
      description: "Descripción de la prueba",
      col1: "Valor55",
      col2: "Valor56",
      col3: "Valor57",
      addedBy: "Raúl",
    },
    {
      id: 24,
      date: "24-02-2025",
      description: "Descripción de la prueba",
      col1: "Valor55",
      col2: "Valor56",
      col3: "Valor57",
      addedBy: "Raúl",
    },
    {
      id: 25,
      date: "25-02-2025",
      description: "Descripción de la prueba",
      col1: "Valor55",
      col2: "Valor56",
      col3: "Valor57",
      addedBy: "Alejandro",
    },
    {
      id: 26,
      date: "26-02-2025",
      description: "Descripción de la prueba",
      col1: "Valor55",
      col2: "Valor56",
      col3: "Valor57",
      addedBy: "Zaida",
    },
    {
      id: 27,
      date: "27-02-2025",
      description: "Descripción de la prueba",
      col1: "Valor55",
      col2: "Valor56",
      col3: "Valor57",
      addedBy: "Josué",
    },
    {
      id: 28,
      date: "28-02-2025",
      description: "Descripción de la prueba",
      col1: "Valor55",
      col2: "Valor56",
      col3: "Valor57",
      addedBy: "Raúl",
    },
    {
      id: 29,
      date: "29-02-2025",
      description: "Descripción de la prueba",
      col1: "Valor55",
      col2: "Valor56",
      col3: "Valor57",
      addedBy: "Alejandro",
    },
  ];

  const [searchText, setSearchText] = useState("");
  const [filteredRows, setFilteredRows] = useState(rows);

  const navigate = useNavigate();

  const handleViewElement = (elementDetails) => {
    navigate("/element-data", {
        state: elementDetails,
    })
  }

  const actionsButtons = (cellValues) => {
    return (
      <>
        <Tooltip title="View" disableInteractive>
          <IconButton
            color="primary"
            aria-label="load"
            onClick={() => handleViewElement (cellValues.row)}
          >
            <VisibilityIcon className="rotate90 blue-iconcolor" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit" disableInteractive>
          <IconButton color="secondary" aria-label="load">
            <EditIcon className="gray-iconcolor" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete" disableInteractive>
          <IconButton color="error" aria-label="delete">
            <DeleteIcon className="red-iconcolor" />
          </IconButton>
        </Tooltip>
      </>
    );
  };

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchText(value);
    setFilteredRows(
      rows.filter(
        (row) =>
          row.description.toLowerCase().includes(value) ||
          row.addedBy.toLowerCase().includes(value)
      )
    );
  };

  const columns = [
    { field: "date", headerName: "Fecha", width: 100 },
    { field: "description", headerName: "Descripción", width: 200 },
    { field: "col1", headerName: "col1", width: 150 },
    { field: "col2", headerName: "col2", width: 150 },
    { field: "col3", headerName: "col3", width: 150 },
    { field: "addedBy", headerName: "Añadido por", width: 200 },
    {
      disableColumnMenu: true,
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 170,
      renderCell: (cellValues) => actionsButtons(cellValues),
    },
  ];

  return (
    <Box sx={{ height: "90%", width: "80%" }}>
      <TextField
        label="Buscar"
        variant="outlined"
        value={searchText}
        onChange={handleSearch}
        fullWidth
        margin="normal"
      />
      <DataGrid rows={filteredRows} columns={columns} disableSelectionOnClick />
    </Box>
  );
};

export default DetailedViewHistory;
