export default function ComponentSkeleton() {
  return (
    <div className="px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[24px] w-full">
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col gap-[16px]">
          <div className="h-[16px] w-full max-w-[150px] bg-skeletonLoader rounded"></div>
          <div className="h-[24px] w-full max-w-[200px] bg-skeletonLoader rounded"></div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <div className="h-[16px] w-full bg-skeletonLoader rounded"></div>
          <div className="h-[16px] w-full bg-skeletonLoader rounded"></div>
        </div>
      </div>

      <ul className="flex flex-wrap gap-[16px]">
        {Array.from({ length: 3 }).map((_, index) => (
          <li key={index} className="flex gap-[8px] items-center">
            <div className="w-full max-w-[20px] h-[20px] bg-skeletonLoader rounded"></div>
            <div className="h-[16px] w-full max-w-[150px] bg-skeletonLoader rounded"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
