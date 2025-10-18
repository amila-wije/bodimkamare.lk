interface Props {
  title: string;
  description: string;
  image: string;
  for: boolean;
  kitchen?: boolean;
}

export default function Card({ title, description, image, for: forProp, kitchen }: Props) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center dark:bg-gray-800">
      <img
        src={image}
        alt={title}
        className="w-full object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-bold text-gray-800 dark:text-white">{title}</h2>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
      <h2 className="text-lg font-bold text-gray-800 dark:text-white">{forProp ? "men" : "women"}</h2>
      <p className="text-gray-600 dark:text-gray-400">{kitchen ? "Has Kitchen" : "No Kitchen"}</p>
    </div>
  );
}
