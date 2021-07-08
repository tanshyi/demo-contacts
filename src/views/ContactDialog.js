import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ContactDialog({data, open, onClose}) {
  let {username, name, email, phone, company} = data;
  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
      >
        <DialogTitle>{username}</DialogTitle>
        <DialogContent>
          <DialogContentText>Name: {name}</DialogContentText>
          <DialogContentText>Email: {email}</DialogContentText>
          <DialogContentText>Phone: {phone}</DialogContentText>
          <DialogContentText>Company: {company.name}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="default" autoFocus>
            Close
          </Button>
          <Button color="primary">
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
