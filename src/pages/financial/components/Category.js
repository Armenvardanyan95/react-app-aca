import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
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
import { addCategory } from '../store/actions';

export function Category() {
    const {dispatch} = useFinancesStore();
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [type, setType] = useState(1);
    const add = () => {
        dispatch(addCategory({type, name}))
        setOpen(false);
    };
    const changeName = event => setName(event.target.value);
    const changeType = event => setType(event.target.value);


    return (
        <>
            <Button onClick={() => setOpen(true)}>Add Category +</Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Add Category</DialogTitle>
                <DialogContent>
                    <FormGroup>
                        <FormControl>
                            <label>Category Name</label>
                            <TextField onChange={changeName} placeholder="Name"/>
                        </FormControl>
                        <FormControl>
                            <InputLabel id="select-box-type">Type</InputLabel>
                            <Select onChange={changeType} labelId="select-box-type">
                                <MenuItem value={1}>Receive</MenuItem>
                                <MenuItem value={-1}>Spend</MenuItem>
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