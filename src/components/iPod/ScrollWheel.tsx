import { PodCenterScrollButton } from './PodCenterScrollButton';

export const ScrollWheel = () => {
  return (
    <div className='flex items-center justify-center sm:h-60 sm:w-60 rounded-full mx-auto mt-5 bg-gray-50 shadow-innerCustom'>
      <PodCenterScrollButton />
    </div>
  );
};