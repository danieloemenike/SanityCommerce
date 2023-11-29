

import { Input } from "./ui/input";
import { ModeToggle } from "./ui/darkModeToggle";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import Menu from "./menu";
type Props = {};

const Header = (props: Props) => {

	return (
		<header className="shadow-md bg-background dark:shadow-2xl w-full mb-1 sticky top-0 z-50 backdrop-filter backdrop-blur-lg  border-b-2">
			<nav className="flex  gap-10 lg:gap-20 justify-between mx-10 pt-2 items-center  h-[5rem]">
				<div className="cursor-pointer">
					<h2 > BCN FASHION </h2>
				</div>
				<div className="flex-grow flex gap-2">
				<Menu />
					<div className="hidden md:w-[80%] md:block">

			
						<Input type="search" about="" placeholder="Search For Products..." className="rounded-lg" />
						</div>
				</div>
				<div className="flex items-center gap-6 flex-grow justify-center">
				
						<ModeToggle />
						
						<Button>
							Login
					</Button>

					<Button variant="secondary" className="relative">
						
						<ShoppingCart className="cursor-pointer" />
						<span title="Cart" className="text-background absolute top-0 end-0 block h-6 w-6 p-1 transform -translate-y-1/2 translate-x-1/2 rounded-full text-center bg-primary animate-pulse text-[8px]">
							50
							</span>
					</Button>

				</div>
			</nav>
		</header>
	);
};

export default Header;
