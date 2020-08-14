import List from "@material-ui/core/List";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React, { useState, useEffect, useCallback } from "react";
import FoodListItem from "../FoodListItem";
import { FoodPostDocument } from "../../src/utils/types";
import FoodPostDetail from "../FoodPostDetail";
import { OrderScreen } from "..";
import { getFoodPosts } from "../../src/utils/services";
import { FoodPost as FoodPostType } from '../../src/utils/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
  })
);

const FoodList = () => {
  const classes = useStyles();

  const [posts, setPosts] = useState<FoodPostType[]>([]);
  const [openPostId, setOpenPostId] = useState<string | null>(null);
  const [orderPostId, setOrderPostId] = useState<string | null>(null);

  const _getFoodPosts = async () => {
    setPosts(await getFoodPosts());
  };
  useEffect(() => {
    if (posts.length === 0) _getFoodPosts();
  }, []);

  const handlePostClick = useCallback((currentPostId: string) => {
    setOpenPostId(currentPostId);
  }, []);

  const handleClosePost = useCallback(() => {
    setOpenPostId(null);
  }, []);

  const handleClickGetIt = useCallback((orderPostId) => {
    setOrderPostId(orderPostId);
  }, []);

  const handleCloseOrder = useCallback(() => {
    setOrderPostId(null);
  }, []);
  const selectedOrderPost = posts.find((post) => post.id === orderPostId);
  const selectedOpenPost = posts.find((post) => post.id === openPostId);
  return (
    <List className={classes.root}>
      {posts.map((post: FoodPostType) => (
        <FoodListItem
          key={post.createdAt?.toDateString()}
          foodPost={post}
          onClick={handlePostClick}
          onClickGetIt={handleClickGetIt}
        />
      ))}
      {openPostId && (
        <FoodPostDetail
          post={selectedOpenPost}
          onClose={handleClosePost}
          onClickGetIt={handleClickGetIt}
        />
      )}
      {orderPostId && (
        <OrderScreen post={selectedOrderPost} onClose={handleCloseOrder} />
      )}
    </List>
  );
};

export default FoodList;
