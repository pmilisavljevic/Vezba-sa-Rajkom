type Props = {
  userName: string;
  date: string;
  title: string;
  body: string;
};

function PostComponent({ userName, date, title, body }: Props) {
  return (
    <div>
      <p>By {userName}</p>
      <p>{date}</p>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

export default PostComponent;
