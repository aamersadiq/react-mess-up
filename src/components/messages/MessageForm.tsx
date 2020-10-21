import React, { FunctionComponent } from "react";
import { MessageFormProps } from "./types";
import { Message } from "../../common/types/message";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SimpleCard from "../common/SimpleCard";

const MessageForm: FunctionComponent<MessageFormProps> = ({
  message,
  ...props
}) => {
  // let gridItems = [];
  // for (let i = 0; i < (message as Message).replies.length; i++) {
  //   gridItems.push(
  //     i % 2
  //       ? "<Grid item xs={6}>odd row</Grid><Grid item xs={6}></Grid>"
  //       : "<Grid item xs={6}></Grid><Grid item xs={6}>even row</Grid>"
  //   );
  // }
  return (
    <>
      <h2>
        Message{" - "}
        {(message as Message).id ? "" : "(New)"}
      </h2>
      <Paper elevation={3}>
        <Grid container spacing={3}>
          {(message as Message).replies &&
            (message as Message).replies.map((reply, index) => {
              return (
                <>
                  {index % 2 === 0 ? (
                    <>
                      <Grid item xs={6} key={reply.id + "grid1"}>
                        <SimpleCard
                          key={reply.id + "card1"}
                          message={reply.text}
                          messageDate={reply.createdDate}
                        />
                      </Grid>
                      <Grid item xs={6} key={reply.id + "grid2"}></Grid>
                    </>
                  ) : (
                    <>
                      <Grid item xs={6} key={reply.id + "grid3"}></Grid>
                      <Grid item xs={6} key={reply.id + "grid4"}>
                        <SimpleCard
                          key={reply.id + "card2"}
                          message={reply.text}
                          messageDate={reply.createdDate}
                        />
                      </Grid>
                    </>
                  )}
                </>
              );
            })}
          <Grid item xs={12} key={(message as Message).id + "grid"}>
            <SimpleCard
              key={(message as Message).id + "card"}
              message={(message as Message).text}
              messageDate={(message as Message).createdDate}
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default MessageForm;
