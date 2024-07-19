export default function TeamSkeleton() {
	return (
		<div className="bg-skeletonLoader py-[100px]">
			<div className="bg-white bg-opacity-[0.85] py-[60px] border-color03 border-solid border-y-[2px] shadow-custom">
				<div className="px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[24px]">
					<div className="flex flex-col gap-[24px]">
						<div className="flex flex-col gap-[16px]">
							<div className="flex flex-col gap-[16px]">
								<div className="h-[20px] w-full max-w-[150px] bg-skeletonLoader rounded"></div>
								<div className="h-[40px] w-full max-w-[250px] bg-skeletonLoader rounded mt-[10px]"></div>
							</div>

							<div className="h-[20px] w-full max-w-[300px] bg-skeletonLoader rounded mt-[10px]"></div>
						</div>

						<div className="flex flex-col gap-[20px]">
							<div className="h-[20px] w-full max-w-[200px] bg-skeletonLoader rounded"></div>

							<div className="flex flex-col gap-[24px] md:flex-row md:justify-between">
								<div className="flex flex-col gap-[12px]">
									<div className="h-[20px] w-full max-w-[150px] bg-skeletonLoader rounded"></div>
									<div className="h-[20px] w-full max-w-[300px] bg-skeletonLoader rounded mt-[10px]"></div>
								</div>
								<div className="flex flex-col gap-[12px]">
									<div className="h-[20px] w-full max-w-[150px] bg-skeletonLoader rounded"></div>
									<div className="h-[20px] w-full max-w-[300px] bg-skeletonLoader rounded mt-[10px]"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
