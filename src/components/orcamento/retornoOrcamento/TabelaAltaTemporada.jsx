import React from 'react';
import { useTable, useFilters, useSortBy } from 'react-table';
import { Table, Button } from 'react-bootstrap';

const TabelaAltaTemporada = ({ dados, excluirData }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Data',
        accessor: 'data',
        Cell: ({ value }) => new Date(value).toLocaleDateString(),
      },
      {
        Header: 'Mês',
        accessor: 'mes',
      },
      {
        Header: 'Ano',
        accessor: 'ano',
      },
      {
        Header: 'Descrição',
        accessor: 'descricao',
      },
      {
        Header: 'Ações',
        accessor: 'acoes',
        Cell: ({ row }) => (
          <Button variant="danger" onClick={() => excluirData(row.original.id)}>
            Excluir
          </Button>
        ),
      },
    ],
    [excluirData]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data: dados,
    },
    useFilters,
    useSortBy
  );

  return (
    <Table striped bordered hover {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>
                  {column.isSorted
                    ? column.isSortedDesc
                      ? ' 🔽'
                      : ' 🔼'
                    : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TabelaAltaTemporada;
