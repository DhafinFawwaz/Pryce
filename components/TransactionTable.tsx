"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import TransactionAction from "./TransactionAction";
import { Fragment, useState } from "react";
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export default function TransactionTable({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [selectedRow, isSelectedRow] = useState<TData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  function handleEditRow(rowData: TData) {
    console.log(rowData);
    isSelectedRow(rowData);
    setIsModalOpen(true);
  }
  console.log(selectedRow?.id);

  return (
    <Fragment>
      <TransactionAction
        title="Edit Transaction"
        type="Edit"
        isOpen={isModalOpen}
        data={selectedRow}
        onClose={() => setIsModalOpen(false)}
      />
      <Table>
        <TableHeader className="bg-purple-200 border-none outline-none rounded-full">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="relative border-none">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className={`text-center text-black align-middle`}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
              <TableHead 
                key={"Action"}
                className="text-center text-black align-middle" />

            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="border-none"
                onClick={() => handleEditRow(row.original)}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className={`text-center font-Inter text-gray-300 items-center justify-center`}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
            
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Fragment>
  );
}
