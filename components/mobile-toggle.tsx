import { Menu } from "lucide-react"

import {
   Sheet,
   SheetTrigger,
   SheetContent,
   SheetTitle
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";
import { ServerSidebar } from "@/components/server/server-sidebar";

export const MobileToggle = ({
    serverId
}:{
    serverId: string;
    })=>{
    return(
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu/>
            </Button>
          </SheetTrigger>
          <SheetTitle/>
          <SheetContent side="left" className="p-0 flex flex-row gap-0">
            <div className="w-[72px] h-full">
              <NavigationSidebar/>
            </div>
            <div className="w-full">
           <ServerSidebar serverId={serverId}/>
           </div>
          </SheetContent>
        </Sheet>
    )
}