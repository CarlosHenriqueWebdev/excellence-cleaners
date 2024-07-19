export default function AboutSkeleton() {
  return (
    <div className="px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[32px] md:grid md:grid-cols-[1fr_1fr]">
      <div className="md:order-[1] bg-skeletonLoader rounded-[16px] shadow-custom w-full h-[300px] md:h-full"></div>

      <div className="flex flex-col gap-[24px] md:py-[48px]">
        <div className="flex flex-col gap-[32px] md:text-center md:justify-center md:items-center">
          <div className="flex flex-col gap-[16px] md:text-center md:justify-center md:items-center">
            <div className="h-[20px] w-full max-w-[150px] bg-skeletonLoader rounded"></div>
            <div className="h-[40px] w-full max-w-[250px] bg-skeletonLoader rounded mt-[10px]"></div>
            <div className="h-[20px] w-full max-w-[300px] bg-skeletonLoader rounded mt-[10px]"></div>
          </div>

          <div className="h-[40px] w-full max-w-[150px] bg-skeletonLoader rounded mt-[10px]"></div>
        </div>
      </div>
    </div>
  );
}
