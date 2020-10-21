import React, { FunctionComponent } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export type AlertDialogProps = {
  message: string;
  open: boolean;
  doOkClick: any;
  doCancelClick: any;
};

const AlertDialog: FunctionComponent<AlertDialogProps> = ({
  message,
  open,
  doOkClick,
  doCancelClick,
}) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={doCancelClick}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Alert"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={doCancelClick} color="primary">
            Cancel
          </Button>
          <Button onClick={doOkClick} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
