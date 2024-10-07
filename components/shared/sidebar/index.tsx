import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu } from "./Menu"
import Image from "next/image"

export function Sidebar() {
  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-20 h-screen w-[70px] -translate-x-full bg-white transition-[width] duration-300 ease-in-out lg:translate-x-0",
      )}
    >
      <div className="relative flex h-full flex-col justify-between overflow-y-auto px-3 py-4">
        <Button
          className={cn("transition-transform duration-300 ease-in-out")}
          variant="link"
          asChild
        >
          <Link href="/dashboard" className="flex items-center gap-2 !p-0">
            {/* <PanelsTopLeft className="mr-1 h-6 w-6" /> */}

            <Image
              src="https://ds-storage.sgp1.cdn.digitaloceanspaces.com/blio/assets/images/manta.svg"
              alt="logo"
              height={30}
              width={30}
            />
          </Link>
        </Button>
        <Menu isOpen={false} />
      </div>
    </aside>
  )
}
