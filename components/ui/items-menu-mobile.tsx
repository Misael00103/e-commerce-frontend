import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Menu } from "lucide-react";
import Link from "next/link"
const ItemsMenuMobile = () => {
    return ( 
        <Popover>
            <PopoverTrigger>
                <Menu/>
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/categories/cafe-molido" className="block">Cafe molido</Link>
                <Link href="/categories/cafe-grano" className="block">Cafe en grano</Link>
                <Link href="/categories/cafe-capsula" className="block">Cafe en capsulas</Link>

            </PopoverContent>
        </Popover>
     );
}
 
export default ItemsMenuMobile;