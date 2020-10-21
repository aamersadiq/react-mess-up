import React, { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export type SimpleCardProps = {
  message: string;
  messageDate: Date;
};

const useStyles = makeStyles({
  root: {},
  cardContent: {
    padding: 12,
    "&:last-child": {
      paddingBottom: 12,
    },
  },
});

const SimpleCard: FunctionComponent<SimpleCardProps> = ({
  message,
  messageDate,
}) => {
  const classes = useStyles();
  console.log("date", messageDate);
  console.log("date", new Date(messageDate));
  return messageDate ? (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.cardContent}>
        {message}
        <div style={{ textAlign: "right", color: "grey" }}>
          {new Intl.DateTimeFormat("en-au", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
          }).format(new Date(messageDate))}
        </div>
      </CardContent>
    </Card>
  ) : (
    <p></p>
  );
};

export default SimpleCard;
