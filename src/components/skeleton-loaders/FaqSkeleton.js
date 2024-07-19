export default function ComponentSkeleton() {
  return (
    <div className="px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[32px] md:grid md:grid-cols-[430fr_658fr]">
      <div className="flex flex-col gap-[16px] md:py-[16px] md:sticky md:top-0 h-fit">
        <div className="flex flex-col gap-[16px]">
          <div className="h-[20px] w-full max-w-[200px] bg-skeletonLoader rounded"></div>
          <div className="h-[30px] w-full max-w-[150px] bg-skeletonLoader rounded"></div>
        </div>

        <div className="item flex flex-col gap-[16px]">
          <div className="h-[16px] w-full bg-skeletonLoader rounded"></div>
          <div className="h-[16px] w-full bg-skeletonLoader rounded"></div>
        </div>
      </div>

      <ul className="flex flex-col shadow-custom overflow-hidden rounded-[16px] border-solid border-[1px] border-color03 bg-color05">
        {Array.from({ length: 3 }).map((_, index) => (
          <li
            key={index}
            className="border-solid border-b-[1px] border-color03"
          >
            <div className="group cursor-pointer font-semibold p-[24px] flex flex-col">
              <div className="flex justify-between items-center cursor-pointer">
                <div className="h-[20px] w-full max-w-[200px] bg-skeletonLoader rounded"></div>
                <div className="w-full max-w-[16px] h-[16px] bg-skeletonLoader rounded"></div>
              </div>

              <div className="overflow-hidden">
                <div className="h-[16px] w-full bg-skeletonLoader rounded mt-[8px]"></div>
                <div className="h-[16px] w-full bg-skeletonLoader rounded mt-[4px]"></div>
                <div className="h-[16px] w-full bg-skeletonLoader rounded mt-[4px]"></div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
