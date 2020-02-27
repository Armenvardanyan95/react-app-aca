import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import { useFinancesStore } from '../store/use-finances-store';
import { addExpense } from '../store/actions';

export function Expense() {
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState(null);
    const [amount, setAmount] = useState(0);
    const {state, dispatch} = useFinancesStore();
    const add = () => {
        dispatch(addExpense({amount, category}));
        setOpen(false);
    };
    const changeAmount = event => setAmount(+event.target.value);
    const changeCategory = event => setCategory(event.target.value);
    return (
        <>
            <Button onClick={() => setOpen(true)}>Add Record +</Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Add Record</DialogTitle>
                <DialogContent>
                    <FormGroup>
                        <FormControl>
                            <label>Amount</label>
                            <TextField type="number" onChange={changeAmount} placeholder="Name"/>
                        </FormControl>
                        <FormControl>
                            <InputLabel id="select-box-type">Category</InputLabel>
                            <Select onChange={changeCategory} labelId="select-box-type">
                                {
                                    state.categories.map(
                                        category => <MenuItem key={category.name} value={category}>{category.name}</MenuItem>
                                    )
                                }
                            </Select>
                        </FormControl>
                    </FormGroup>
                </DialogContent>
                <DialogActions>
                    <Button onClick={add}>Add</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}