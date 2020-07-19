import React, { useEffect, useState } from "react";
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";
import ArrowBack from "@material-ui/icons/ArrowBack";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { TransitionProps } from "@material-ui/core/transitions";
import Slide from "@material-ui/core/Slide";
import { FoodPostDocument } from "../../src/utils/types";
// import { getDownloadUrl } from "../../utils/service/firestore";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: "relative",
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    postImage: {
      height: "500px",
      width: "500px",
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
  })
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FoodPostDetail = ({
  post,
  onClose,
  onClickGetIt,
}: { 
  post: FoodPostDocument | undefined;
  onClose: () => void;
  onClickGetIt: (id: string|undefined) => void;
}) => {
  const classes = useStyles();
  const [postImage, setPostImage] = useState(null);
  const _getPostImage = async () => {
    //TODO: implement this
    // setPostImage(await getDownloadUrl(post?.foodPost.uploadedImageUrl));
    setPostImage('TODO: implement this')
    return;
  };
  useEffect(() => {
    if (!postImage) _getPostImage();
  }, []);

  return (
    <Dialog
      fullScreen
      open={!!post}
      // onClose={onClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {post?.foodPost.name}
          </Typography>
          {post?.foodPost.cuisineTags.map((cTag) => (
            <Chip label={cTag} variant="outlined" />
          ))}
        </Toolbar>
      </AppBar>
      <List>
        <ListItem className={classes.postImage}>
          <img className={classes.postImage} src={postImage || ""} />
        </ListItem>
        <Divider />
        <ListItem>
          <Typography
            onClick={(e: any) => {
              e.stopPropagation();
              return onClickGetIt(post?.id);
            }}
            noWrap
            component="span"
            variant="h5"
            className={classes.orderLink}
          >
            Get it by {post?.foodPost.cookingDate}, {post?.foodPost.cookingTime}
          </Typography>
          <Chip label={post?.foodPost.category} variant="outlined" />
        </ListItem>
        <ListItem>
          <ListItemText primary={`${post?.foodPost.description}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Servings left: ${post?.foodPost.servings}`} />
        </ListItem>
      </List>
    </Dialog>
  );
};

FoodPostDetail.whyDidYouRender = {
  logOnDifferentValues: true,
};
export default FoodPostDetail;
