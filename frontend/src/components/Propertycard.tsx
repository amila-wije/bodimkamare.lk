import { Users, Home, Utensils, User } from 'lucide-react';

interface Props {
  title: string;
  description: string;
  image: string;
  for: boolean; // Changed to boolean to match your data
  kitchen?: boolean;
}

function Card({ title, description, image, for: isForMen, kitchen }: Props) {
  return (
    <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 dark:bg-gray-800">
      {/* Image Section with Overlay */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        
        {/* Floating Badge - Updated for boolean */}
        <div className="absolute top-4 right-4 flex gap-2">
          <div className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md ${
            isForMen 
              ? 'bg-blue-500/90 text-white' 
              : 'bg-pink-500/90 text-white'
          }`}>
            <User className="w-3.5 h-3.5" />
            {isForMen ? 'For Men' : 'For Women'}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 min-h-[3rem]">
          {description}
        </p>

        {/* Features Section */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <div className={`flex items-center gap-1.5 px-3 py-2 rounded-lg ${
              kitchen 
                ? 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                : 'bg-gray-50 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
            }`}>
              <Utensils className="w-4 h-4" />
              <span className="text-sm font-medium">
                {kitchen ? 'Kitchen' : 'No Kitchen'}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-1 text-gray-400">
            <Home className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;