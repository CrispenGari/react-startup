import Animation from "../Animation";
import Skeleton from "../component";
import "./PostSkeleton.sass";
const PostSkeleton: React.FC<{ theme: "light" | "dark" }> = ({ theme }) => {
  const className: string = `post__skeleton ${theme}`;

  return (
    <div className={className}>
      <div className="post__skeleton__top">
        <Skeleton type="avatar" />
        <div className="post__skeleton__top__right">
          <Skeleton type="title" />
          <Skeleton type="title__normal" />
          <Skeleton type="title__normal" />
          <Skeleton type="title__normal__small" />
        </div>
      </div>
      <Skeleton type="post__image" />
      <Skeleton type="title__normal__link" />
      <Animation />
    </div>
  );
};

export default PostSkeleton;
