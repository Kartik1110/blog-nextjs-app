import { IPost } from "@/interfaces";
import Avatar from "./Avatar";

function Post({ post }: { post: IPost }) {
  const { id, author, title, content } = post;
  return (
    <div key={id} className="bg-yellow-50 shadow-md rounded-md w-1/2 p-5 my-5">
      <Avatar name={author} picture={"./assets/man.png"} />
      <h1 className="text-gray-900 font-bold text-xl mb-2">{title}</h1>
      <p className="text-gray-700 text-base mb-2">{content}</p>
      <div className="flex items-center">
        <div className="text-sm">
          <p className="text-gray-600">Aug 18</p>
        </div>
      </div>
    </div>
  );
}
export default Post;
