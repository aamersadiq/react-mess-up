import React, { FunctionComponent, useEffect } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import moment from "moment";
import MaterialTable, { Column } from "material-table";
import { IconButton, Badge, Tooltip } from "@material-ui/core";
import { Mail, Delete } from "@material-ui/icons";
import { green, grey } from "@material-ui/core/colors";
import { Message } from "../../common/types/message";
import { MessageListProps } from "./types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    customMargin: {
      marginTop: 0,
      marginRight: 2,
    },
    actionActive: {
      color: green[500],
    },
    actionPassive: {
      color: grey[700],
    },
  })
);

const MessageList: FunctionComponent<MessageListProps> = ({
  messages,
  onDeleteClick,
  onItemClick,
}) => {
  const classes = useStyles();
  const columns: Array<Column<Message>> = [
    { field: "text" },
    {
      title: "By",
      render: (rowData) => rowData.createdBy.firstName,
    },
    {
      title: "Created",
      field: "createdDate",
      render: (rowData) =>
        moment(rowData.createdDate).format("MMMM Do YYYY, h:mm:ss a"),
    },
  ];

  return (
    <MaterialTable
      title="Messages"
      columns={columns}
      data={messages}
      actions={[
        {
          icon: "view_column",
          tooltip: "View Message",
          onClick: (event, rowData) => {
            onItemClick(event, rowData);
          },
        },
        {
          icon: "delete",
          tooltip: "Delete Message",
          onClick: (event, rowData) => {
            onDeleteClick(event, rowData);
          },
        },
      ]}
      components={{
        Action: (props): any => {
          if (props.action.icon === "view_column") {
            return (
              <Tooltip
                title={
                  props.data.unReadReplyCount === 0
                    ? `View${props.data.isRead ? "" : " new"} message`
                    : `View message with ${
                        props.data.unReadReplyCount
                      } unread ${
                        props.data.unReadReplyCount === 1
                          ? " reply"
                          : " replies"
                      }`
                }
                aria-label="view"
                placement="left"
                classes={{ tooltip: classes.customMargin }}
              >
                <IconButton
                  onClick={(event) => props.action.onClick(event, props.data)}
                >
                  {props.data.unReadReplyCount === 0 ? (
                    <Mail
                      className={
                        props.data.isRead
                          ? classes.actionPassive
                          : classes.actionActive
                      }
                    />
                  ) : (
                    <Badge
                      badgeContent={props.data.unReadReplyCount}
                      color="primary"
                    >
                      <Mail className={classes.actionActive} />
                    </Badge>
                  )}
                </IconButton>
              </Tooltip>
            );
          } else {
            return (
              <Tooltip
                title="Delete message"
                aria-label="view"
                placement="left"
                classes={{ tooltip: classes.customMargin }}
              >
                <IconButton
                  onClick={(event) => props.action.onClick(event, props.data)}
                >
                  <Badge color="primary">
                    <Delete className={classes.actionPassive} />
                  </Badge>
                </IconButton>
              </Tooltip>
            );
          }
        },
      }}
      options={{
        actionsColumnIndex: -1,
      }}
    />
  );
};

export default MessageList;
