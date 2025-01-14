import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { FinishOrder } from '../../redux/CartSlice';

const Checkout = () => {

    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleConfirm = () => {
        dispatch(FinishOrder());
        setOpen(false);
    };

    return (

        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>CHECKOUT</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="checkout-dialog-title" fullWidth maxWidth="sm">
                <DialogTitle id="checkout-dialog-title">Confirm Checkout</DialogTitle>
                <DialogContent>Are you sure you want to finish your order?</DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">Cancel</Button>
                    <Button onClick={handleConfirm} color="primary">Confirm</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Checkout;
