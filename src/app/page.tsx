import Image from "next/image";

export default function Home() {
	return (
		<main className="flex items-center justify-center h-screen p-5 bg-gray-100 dark:bg-gray-700">
			<div className="w-full max-w-screen-sm p-5 bg-white shadow-lg rounded-3xl dark:bg-gray-500">
				<div className="flex items-center justify-between">
					<div className="flex flex-col">
						<span className="-mb-1 font-semibold text-gray-600 dark:text-gray-400">
							In Transit
						</span>
						<span className="text-4xl font-semibold dark:text-white">
							CoolBlue
						</span>
					</div>
					<div className="bg-orange-400 rounded-full size-12"></div>
				</div>
				<div className="flex items-center gap-2 my-2">
					<span
						className="bg-green-400 text-white uppercase px-2.5 py-1.5 text-xs font-medium 
          rounded-full hover:bg-green-500 hover:scale-125 transition"
					>
						Today
					</span>
					<span className="dark:text-gray-100">9:30-10:30</span>
				</div>
				<div className="relative">
					<div className="absolute w-full h-2 bg-gray-200 rounded-full"></div>
					<div className="absolute w-2/3 h-2 bg-green-400 rounded-full"></div>
				</div>
				<div className="flex items-center justify-between mt-5 text-gray-600 dark:text-gray-300">
					<span>Expected</span>
					<span>Sorting center</span>
					<span>In transit</span>
					<span className="text-gray-400 dark:text-gray-600">Delivered</span>
				</div>
			</div>
		</main>
	);
}
