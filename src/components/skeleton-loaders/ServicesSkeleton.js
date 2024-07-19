export default function ComponentSkeleton() {
  return (
    <div>
      <div className="px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[32px] w-full">
        <div className="flex flex-col gap-[16px]">
          <div className="h-[20px] w-full max-w-[200px] bg-skeletonLoader rounded"></div>
          <div className="h-[40px] w-full max-w-[250px] bg-skeletonLoader rounded mt-[10px]"></div>
        </div>

        <ul className="flex flex-col gap-[24px] md:grid md:grid-cols-[1fr_1fr] w-full">
          {Array.from({ length: 6 }).map((_, index) => (
            <li className="rounded-[16px] flex flex-col w-full overflow-hidden bg-skeletonLoader pt-[150px] shadow-custom justify-end">
              <div className="bg-color03 bg-opacity-[0.9] flex flex-col gap-[16px] font-bold uppercase p-[16px]">
                <div className="h-[20px] w-full max-w-[150px] bg-skeletonLoader rounded"></div>
                <div className="h-[40px] w-full max-w-[120px] bg-skeletonLoader rounded"></div>
              </div>
            </li>
          ))}
        </ul>

        <div className="bg-skeletonLoader px-[32px] py-[12px] rounded-[6px] uppercase font-bold text-[14px] w-fit cursor-pointer text-white">
          <div className="h-[20px] w-full max-w-[120px] bg-skeletonLoader rounded"></div>
        </div>
      </div>
    </div>
  );
}
