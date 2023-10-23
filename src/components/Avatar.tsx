type AvatarProps = {
  name: string;
  picture: string;
};

function Avatar({ name, picture }: AvatarProps) {
  return (
    <div className="flex items-center mb-2">
      <img className="w-8 h-8 rounded-full" src={picture} />
      <p className="text-gray-900 p-2 leading-none">{name}</p>
    </div>
  );
}

export default Avatar;
