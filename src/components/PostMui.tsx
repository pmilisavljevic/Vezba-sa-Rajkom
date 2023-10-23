import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { PostType } from "../state/context";
import { Link } from "react-router-dom";

export default function PostMui({
  img,
  title,
  body,
  userName,
  date,
  id,
}: PostType) {
  return (
    <Card sx={{}}>
      <CardActionArea component={Link} to={`/post/${id}`}>
        <CardMedia
          component="img"
          //   height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography gutterBottom component="div">
            By {userName}
          </Typography>
          <Typography gutterBottom component="div">
            Date: {date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`${body.substring(0, 300)}...`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
