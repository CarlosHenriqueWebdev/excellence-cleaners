export default function ComponentSkeleton() {
	return (
		<div className="curve bg-skeletonLoader relative overflow-hidden py-[100px]">
			<div className="bg-white bg-opacity-[0.85] py-[60px]">
				<div className="px-[24px] lg:px-[80px] mx-auto max-w-[640px] md:max-w-full xl:max-w-[1280px] flex flex-col gap-[24px]">
					<div className="flex flex-col gap-[24px]">
						<div className="flex flex-col gap-[16px] md:text-center md:justify-center md:items-center">
							<div className="h-[20px] w-full max-w-[200px] bg-skeletonLoader rounded"></div>
							<div className="h-[40px] w-full max-w-[250px] bg-skeletonLoader rounded mt-[10px]"></div>
						</div>

						<ul className="flex flex-col md:grid md:grid-cols-[1fr_1fr] gap-[24px]">
							{Array.from({ length: 6 }).map((_, index) => (
								<li
									key={index}
									className="grid grid-cols-[1fr_1fr] gap-[2px] shadow-custom rounded-[16px] overflow-hidden bg-skeletonLoader"
								>
									<div className="relative bg-skeletonLoader h-[300px]">
										<div className="absolute left-0 bottom-0 p-[16px]">
											<div className="py-[4px] px-[12px] sm:py-[8px] sm:px-[32px] border-[1px] border-solid border-color03 uppercase font-bold text-black text-[12px] bg-white bg-opacity-[0.90] rounded-[6px] shadow-custom"></div>
										</div>
									</div>

									<div className="relative bg-skeletonLoader h-[300px]">
										<div className="absolute right-0 bottom-0 p-[16px]">
											<div className="py-[4px] px-[12px] sm:py-[8px] sm:px-[32px] border-[1px] border-solid border-color03 uppercase font-bold text-black text-[12px] bg-white bg-opacity-[0.90] rounded-[6px] shadow-custom"></div>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
