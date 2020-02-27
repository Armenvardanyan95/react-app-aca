import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import { useFinancesStore } from '../store/use-finances-store';

export function Summary() {
    const {state} = useFinancesStore();
    const total = state.expenses.reduce(
        (acc, record) => acc + (record.amount * record.category.type),
        0
    );
    const summary = state.categories
                         .filter(category => category.type === -1)
                         .map(category => ({
                             name: category.name,
                             totalAmount: state.expenses
                                               .filter(record => record.category === category)
                                               .map(record => record.amount)
                                               .reduce((acc, next) => acc + next, 0),

                         }));
    const totalExpense = summary.map(item => item.totalAmount).reduce((acc, next) => acc + next, 0);
    return (
        <Card>
            <CardHeader>Summary</CardHeader>
            <CardContent>
                <h4>Total Amount: {total}</h4>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableCell>Category</TableCell>
                            <TableCell>Amount</TableCell>
                        </TableHead>
                        <TableBody>
                            {
                                summary.map(item => (
                                    <TableRow>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.totalAmount}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                        <TableFooter>
                            Total expense: {totalExpense}
                        </TableFooter>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    )
}