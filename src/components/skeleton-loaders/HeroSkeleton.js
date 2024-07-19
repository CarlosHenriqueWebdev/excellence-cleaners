export default function HeroSkeleton() {
	return (
		<div className="flex flex-col md:grid md:grid-cols-[1fr_1fr] gap-[24px] lg:gap-[80px] w-full overflow-hidden">
			<div className="flex flex-col gap-[32px] py-[100px] px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:mx-[0] xl:place-self-end xl:max-w-[520px] xl:px-[0] w-full">
				<div className="flex flex-col gap-[24px]">
					<div className="font-bold uppercase flex flex-col gap-[16px]">
						<div className="h-[20px] max-w-[150px] w-full bg-skeletonLoader rounded"></div>
						<div className="h-[40px] max-w-[250px] w-full bg-skeletonLoader rounded mt-[10px]"></div>
					</div>
					<div className="flex flex-col gap-[16px]">
						<div className="h-[20px] max-w-[300px] w-full bg-skeletonLoader rounded"></div>
						<div className="h-[20px] max-w-[300px] w-full bg-skeletonLoader rounded mt-[10px]"></div>
					</div>
				</div>
				<div className="h-[40px] max-w-[150px] w-full bg-skeletonLoader rounded mt-[10px]"></div>
			</div>

			<div className="w-full h-full bg-skeletonLoader"></div>
		</div>
	);
}
