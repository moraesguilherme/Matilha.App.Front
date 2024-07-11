import React from 'react';
import { useTable, useSortBy } from 'react-table';
import { Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const TabelaPrecos = ({ dados, editarPreco, excluirPreco }) => {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Tipo Temporada',
                accessor: 'tipoTemporada',
            },
            {
                Header: 'Valor Dia de Semana',
                accessor: 'valorDiaDeSemana',
            },
            {
                Header: 'Valor Final de Semana',
                accessor: 'valorFinalDeSemana',
            },
            {
                Header: 'Valor Feriado',
                accessor: 'valorFeriado',
            },
            {
                Header: 'Valor Meio Período Semana',
                accessor: 'valorMeioPeriodoSemana',
            },
            {
                Header: 'Valor Pernoite',
                accessor: 'valorPernoite',
            },
            {
                Header: 'Valor Meio Período Fim de Semana',
                accessor: 'valorMeioPeriodoFimDeSemana',
            },
            {
                Header: 'Ações',
                accessor: 'acoes',
                Cell: ({ row }) => (
                    <div className="d-flex justify-content-around">
                        <Button variant="warning" onClick={() => editarPreco(row.original)}>
                            <FontAwesomeIcon icon={faEdit} />
                        </Button>
                        <Button variant="danger" onClick={() => excluirPreco(row.original.id)}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </Button>
                    </div>
                ),
            },
        ],
        [editarPreco, excluirPreco]
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
                                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
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
                {rows.length === 0 && (
                    <tr>
                        <td colSpan={columns.length}>Nenhum preço cadastrado.</td>
                    </tr>
                )}
            </tbody>
        </Table>
    );
};

export default TabelaPrecos;
