import React, { useState } from "react";
import { CubeTransparentIcon } from "@heroicons/react/24/outline";

function validateURL(url: string | undefined): boolean {
	if (url === undefined) return false;
	// Regular expression pattern to validate the URL
	// eslint-disable-next-line no-useless-escape
	const urlPattern = /^(https?:\/\/)?([\w.-]+\.[a-z]{2,})(\/[^\/\s]*)*\/?$/i;

	// Test the URL against the pattern
	return urlPattern.test(url);
}

export default function Example(): JSX.Element {
	const [URL, setURL] = useState<string>();
	const [showError, setshowError] = useState(false);
	function handleOnClick(): void {
		if (validateURL(URL)) {
			alert(URL);
		} else {
			setshowError(true);
		}
	}
	return (
		<div className="bg-white">
			<header className="absolute inset-x-0 top-0 z-50">
				<nav
					className="flex items-center justify-between p-6 lg:px-8"
					aria-label="Global"
				>
					<div className="flex lg:flex-1">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							<img
								className="h-8 w-auto"
								src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
								alt=""
							/>
						</a>
					</div>
				</nav>
			</header>

			<div className="relative isolate px-6 pt-14 lg:px-8">
				<div
					className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
					aria-hidden="true"
				>
					<div
						className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
					/>
				</div>
				<div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							Transform the Web: Unleash AI to Reword the World
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Unlock the Power of AI for Web Content
							Transformation. Seamlessly modify and enhance any
							webpage's text to captivate your audience and drive
							meaningful engagement.
						</p>
						{/* Input */}
						<div className="flex align-middle justify-center">
							<div className=" mt-10 sm:mt-12">
								<form
									action="#"
									className="sm:mx-auto sm:max-w-xl lg:mx-0"
								>
									<div className="sm:flex">
										<div className="min-w-0 flex-1">
											<label
												htmlFor="url"
												className="sr-only"
											>
												Web page
											</label>
											<input
												id="url"
												type="url"
												placeholder="Enter your Webpage URL"
												className="block w-full rounded-md ring-4 ring-indigo-500 border-indigo-500 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-offset-2 "
												value={URL}
												onChange={(_) => {
													setURL(_.target.value);
												}}
											/>
										</div>
										<div className="mt-3 sm:ml-3 sm:mt-0">
											<button
												type="button"
												className="flex gap-2 w-full justify-center rounded-md ring-4 ring-indigo-300 bg-indigo-500 px-6 py-3 font-medium text-white shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2"
												onClick={handleOnClick}
											>
												Transform
												<CubeTransparentIcon className="h-6 w-6" />
											</button>
										</div>
									</div>
									{showError && (
										<p className="mt-3 text-left text-md text-red-500 sm:mt-4">
											Enter a webpage URL
										</p>
									)}
									<p className="mt-3 text-sm text-gray-300 sm:mt-4">
										Some complex webpages can be tricky to
										tranform and the tool may / may not work
										on such pages.
									</p>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div
					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
					aria-hidden="true"
				>
					<div
						className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
					/>
				</div>
			</div>
		</div>
	);
}
