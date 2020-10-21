import React, { FunctionComponent } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { ApplicationState } from "../../store/types";
import { connect } from "react-redux";

export type SpinnerProps = {
  isLoading: boolean;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  })
);

const Spinner: FunctionComponent<SpinnerProps> = ({ isLoading }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    console.log(open);
    setOpen(false);
  };

  return (
    <div>
      <Backdrop
        className={classes.backdrop}
        open={isLoading}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  isLoading: state.apiCallsInProgress > 0,
});

export default connect(mapStateToProps)(Spinner);
