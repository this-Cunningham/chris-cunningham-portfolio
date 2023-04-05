const PodButton = ({ children }: { children: React.ReactNode }) => (
  <div className='flex items-center justify-center sm:w-16 sm:h-16 rounded-full bg-gray-50 neon font-bold text-xs shadow-innerCustom'>
    { children }
  </div>
);

const PodButtonPrevious = () => {
  return (
    <PodButton>
      {'<<'}
    </PodButton>
  );
};

const PodButtonMenu = () => {
  return (
    <PodButton>
      MENU
    </PodButton>
  );
};

const PodButtonPlayPause = () => {
  return (
    <PodButton>
      Play
    </PodButton>
  );
};

const PodButtonNext = () => {
  return (
    <PodButton>
      {'>>'}
    </PodButton>
  );
};

export const PodButtonsRow = () => {
  return (
    <div className='flex sm:gap-[18px] sm:mt-6 mx-auto'>
      <PodButtonPrevious />
      <PodButtonMenu />
      <PodButtonPlayPause />
      <PodButtonNext />
    </div>
  );
};