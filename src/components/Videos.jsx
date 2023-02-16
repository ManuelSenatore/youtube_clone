import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
const Videos = ({ videos, direction }) => {
  if(!videos?.length) return 'Loading...';
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
      gap={2}
    >
      {videos.map((item, i) => (
        <Box key={i}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
