import { LucideIcon } from "lucide-react"

import { HomeIcon, PulseIcon, EcosystemIcon, ApiIcon } from "@/constants/icons"

type Submenu = {
  href: string
  label: string
  active?: boolean
}

type Menu = {
  href: string
  label: string
  active: boolean
  icon: LucideIcon
  submenus?: Submenu[]
}

type Group = {
  groupLabel: string
  menus: Menu[]
}

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          active: pathname.includes("/dashboard"),
          icon: HomeIcon,
          submenus: [],
        },
      ],
    },

    {
      groupLabel: "",
      menus: [
        // {
        //   href: "",
        //   label: "Posts",
        //   active: pathname.includes("/posts"),
        //   icon: SquarePen,
        //   submenus: [
        //     {
        //       href: "/posts",
        //       label: "All Posts",
        //     },
        //     {
        //       href: "/posts/new",
        //       label: "New Post",
        //     },
        //   ],
        // },
        {
          href: "/categories",
          label: "Categories",
          active: pathname.includes("/categories"),
          icon: PulseIcon,
        },
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/tags",
          label: "Tags",
          active: pathname.includes("/tags"),
          icon: EcosystemIcon,
        },
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/users",
          label: "Users",
          active: pathname.includes("/users"),
          icon: ApiIcon,
        },
      ],
    },
  ]
}
