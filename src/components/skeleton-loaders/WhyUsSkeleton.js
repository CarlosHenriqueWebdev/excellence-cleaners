export default function WhyUsSkeleton() {
  return (
    <div className="px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[32px] md:grid md:grid-cols-[3fr_1fr] overflow-hidden">
      <div className="md:order-[1] hidden md:flex flex-col h-[400px] md:sticky md:top-[16px] rounded-[16px] overflow-hidden bg-skeletonLoader"></div>

      <div className="md:order-[1] flex md:hidden flex-col gap-[32px]">
        <div className="bg-skeletonLoader rounded-[16px] w-full max-w-[450px] h-[300px] md:w-full"></div>
      </div>

      <div className="flex flex-col gap-[24px] md:pt-[16px]">
        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[16px]">
            <div className="h-[20px] w-full max-w-[150px] bg-skeletonLoader rounded"></div>
            <div className="h-[40px] w-full max-w-[250px] bg-skeletonLoader rounded mt-[10px]"></div>
          </div>

          <div className="flex flex-col gap-[16px]">
            <div className="h-[20px] w-full max-w-[300px] bg-skeletonLoader rounded mt-[10px]"></div>
          </div>
        </div>

        <ul className="flex flex-col shadow-custom overflow-hidden rounded-[16px] border-solid border-[1px] border-skeletonBorder bg-color05">
          {[...Array(3)].map((_, index) => (
            <li key={index}>
              <div className="font-semibold p-[24px] flex flex-col border-solid border-b-[1px] border-skeletonBorder">
                <div className="flex justify-between items-center">
                  <div className="h-[20px] w-full max-w-[200px] bg-skeletonLoader rounded"></div>
                  <div className="w-full max-w-[16px] h-[16px] bg-skeletonLoader rounded"></div>
                </div>

                <div className="h-[20px] w-full max-w-[300px] bg-skeletonLoader rounded mt-[10px]"></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
