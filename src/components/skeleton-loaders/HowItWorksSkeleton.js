export default function HowItWorksSkeleton() {
	return (
		<div className="px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[32px] w-full overflow-hidden">
			<div className="flex flex-col gap-[16px] md:text-center md:justify-center md:items-center">
				<div className="item">
					<div className="h-[20px] max-w-[150px] w-full bg-skeletonLoader rounded"></div>
				</div>
				<div className="item uppercase text-[1.5rem] font-bold">
					<div className="h-[40px] max-w-[250px] w-full bg-skeletonLoader rounded mt-[10px]"></div>
				</div>
			</div>

			<ul className="flex flex-col gap-[32px] md:grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] w-full">
				{[...Array(3)].map((_, index) => (
					<li
						key={index}
						className="bg-placeholderBg rounded-[16px] border-[1px] border-solid border-skeletonBorder w-full overflow-hidden flex flex-col gap-[24px] p-[24px] md:text-center md:justify-center md:items-center"
					>
						<div className="rounded-[8px] bg-skeletonLoader flex justify-center items-center max-w-[48px] w-full h-[48px]"></div>

						<div className="flex flex-col justify-center items-center gap-[12px]">
							<div className="h-[20px] max-w-[200px] w-full bg-skeletonLoader rounded"></div>
							<div className="h-[20px] max-w-[300px] w-full bg-skeletonLoader rounded mt-[10px]"></div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
