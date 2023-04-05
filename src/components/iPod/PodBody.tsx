import { PodButtonsRow } from './PodButtons';
import { PodScreen } from './PodScreen';
import { ScrollWheel } from './ScrollWheel';

export const PodBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-white flex flex-col h-96 sm:h-[614px] w-56 sm:w-[366px] rounded-[36px] mx-auto shadow-indigo-200 relative shadow-podBodyShadow'>
      <PodScreen />
      <PodButtonsRow />
      <ScrollWheel />
      <BodyBevel />
    </div>
  );
};

const BodyBevel = () => (
  <div className='absolute top-4 bottom-4 left-4 right-4 rounded-[24px] shadow-indigo-300 shadow-podBodyInnerShadow blur-lg'/>
);
