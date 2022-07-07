type TweetProps = {
  text?: String
}

export default function Tweet(props: TweetProps) {
  return (
    <div>{props.text}</div>
  );
}