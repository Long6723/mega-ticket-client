import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableProps,
} from "@mui/material";

interface Column {
  field: string;
  headerName: string;
}

interface RowData {
  id: string | number;
  [key: string]: React.ReactNode;
}

interface MyTableProps extends TableProps {
  columns: Column[];
  rows: RowData[];
}

const MyTable: React.FC<MyTableProps> = ({ columns, rows, ...props }) => {
  return (
    <TableContainer component={Paper}>
      <Table {...props}>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.field}>{column.headerName}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell key={`${row.id}-${column.field}`}>
                  {row[column.field]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyTable;
