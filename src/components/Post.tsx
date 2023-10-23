import { useState } from "react";
// import { Posts } from "../hooks/useGetPosts";
import { Card, CardContent, CardHeader, IconButton } from "@mui/material";
// import CardContent from "@mui/material/CardContent";
// import CardHeader from "@mui/material/CardHeader";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

function Post({ title, userName, body }: Posts) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        // margin: "10px",
        mt: 2,
        // padding: "10px",
        borderRadius: "10px", // Add border-radius for rounded corners
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      <CardHeader title={title} subheader={`Author: ${userName}`} />
      <CardContent>
        <p>{expanded ? body : `${body.substring(0, 300)}...`}</p>
        {body.length > 300 && (
          <IconButton
            size="small"
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            {!expanded ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </IconButton>
        )}
      </CardContent>
    </Card>
  );
}

export default Post;
