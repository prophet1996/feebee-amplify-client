import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Chip,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { LABELS } from "../../src/utils/const";
import { FoodPost as FoodPostType } from '../../src/utils/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      marginRight: theme.spacing(2),
    },
    listItem: {
      cursor: "pointer",
    },
    orderLink: {
      backgroundColor: theme.palette.primary.main,
      color: "white",
      transform: "skew(-10deg)",
      width: "fit-content",
      marginTop: theme.spacing(1),
      padding: `0 ${theme.spacing(1)}px`,
      borderRadius: "2px",
      display: "block",
    },
    money:{
      fontWeight:"bold",
      color:theme.palette.success.main,
      borderColor:theme.palette.success.main,
    },
  })
);

const FoodListItem = ({
  foodPost,
  onClick,
  onClickGetIt,
}: {
  foodPost: FoodPostType;
  onClick: (postId: string) => void;
  onClickGetIt: (postId: string) => void;
}) => {
  const classes = useStyles();
  const { name, createdBy, cookingTime,id ,price,cookingDate,description} = foodPost;
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            variant="rounded"
            className={classes.avatar}
            alt={name}
            src="/static/images/avatar/1.jpg"
          />
        </ListItemAvatar>
        <ListItemText
          onClick={() => onClick(id)}
          primary={name}
          className={classes.listItem}
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                color="textSecondary"
              >
                {LABELS.madeBy}
              </Typography>{" "}
              <Typography component="span" variant="body2" color="textPrimary">
                {createdBy}
              </Typography>
              <Typography
                noWrap
                component="span"
                variant="body2"
                color="textPrimary"
              >
                {description}
              </Typography>
              <Typography
                onClick={(e: any) => {
                  e.stopPropagation();
                  return onClickGetIt(id);
                }}
                noWrap
                component="span"
                variant="body2"
                className={classes.orderLink}
              >
                Get it by {cookingTime}, {cookingDate}
              </Typography>
            </>
          }
        />{" "}
        <Chip label={`₹ ${price}`} className={classes.money} variant="outlined" />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

FoodListItem.whyDidYouRender = { logOnDifferentValues: true };
export default React.memo(FoodListItem);
