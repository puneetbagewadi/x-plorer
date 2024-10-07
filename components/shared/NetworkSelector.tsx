import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function NetworkSelector() {
  return (
    <Select defaultValue="mainnet">
      <SelectTrigger className="w-[180px] !bg-[#32353b]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="mainnet">Mainnet</SelectItem>
          <SelectItem value="testnet">Testnet</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
