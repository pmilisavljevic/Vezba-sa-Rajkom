import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { PostType } from "../state/context";
import { Link } from "react-router-dom";
import { catColors } from "../helpers/constantsAndEnums";

function PostMui({ img, title, body, userName, date, id, category }: PostType) {
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
          <span
            style={{ backgroundColor: catColors[category] }}
            className="postMui__category"
          >
            #{category}
          </span>

          <Typography sx={{ mt: 1 }} variant="body2" color="text.secondary">
            {body.length < 300 ? body : `${body.substring(0, 300)}...`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PostMui;
