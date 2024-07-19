export default function IntroductionSkeleton() {
	return (
		<div className="md:h-[full] px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[32px] md:grid md:grid-cols-[450fr_638fr] w-full overflow-hidden">
			<div className="rounded-[16px] bg-skeletonLoader w-[200px] h-[400px] md:w-full md:h-full"></div>

			<div className="flex flex-col gap-[24px] md:py-[48px]">
				<div className="flex flex-col gap-[16px]">
					<div className="h-[20px] max-w-[150px] w-full bg-skeletonLoader rounded"></div>

					<div className="h-[40px] max-w-[250px] w-full bg-skeletonLoader rounded mt-[10px]"></div>

					<div className="h-[20px] max-w-[300px] w-full bg-skeletonLoader rounded mt-[10px]"></div>
				</div>

				<ul className="flex flex-col gap-[16px]">
					{[...Array(8)].map((_, index) => (
						<li key={index} className="flex items-center gap-[8px]">
							<div className="max-w-[20px] w-full h-[20px] bg-skeletonLoader rounded"></div>
							<div className="h-[20px] max-w-[200px] w-full bg-skeletonLoader rounded"></div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
