"use client"

import { usePathname, useRouter } from 'next/navigation';
import { storeRoutes } from "./navMenu";

type Props = {}

function Menu({ }: Props) {
    	const activeRoute = usePathname();
    const router = useRouter()
    const OnNavigate = (url:string) => {
        router.push(url)
    }
  return (

          <nav className="flex gap-2 ">
						{ storeRoutes.map((menu) => (
							<>
								              <div onClick={ () => OnNavigate(menu.path) } className= {`flex group items-center cursor-pointer text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 ${activeRoute === `${menu.path}` ? 'bg-gradient-to-r from-stone-800 via-sky-600 to-blue-800  shadow-lg hover:bg-blue-700' : "  hover:text-gray-300 "} hover:bg-blue-200  rounded-lg hover:shadow-md px-3 py-2` }  key={ menu.id } >
                                             
                          <h4 className={ ` text-sm font-normal ${activeRoute === `${menu.path}` ? 'text-white ' : 'text-primary dark:group-hover:text-gray-300'}` }> {menu.title} </h4>
                      </div> 
								</>
							
						))}
					</nav>

     
  )
}

export default Menu