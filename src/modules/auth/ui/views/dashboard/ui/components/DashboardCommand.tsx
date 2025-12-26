import { Dispatch, SetStateAction } from "react"
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty
} from "@/components/ui/command"

interface Props {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export const DashboardCommand = ({ open, setOpen }: Props) => {
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Find a meeting or agent" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandItem onSelect={() => setOpen(false)}>
          Test
        </CommandItem>

        <CommandItem onSelect={() => setOpen(false)}>
          Dashboard
        </CommandItem>

        <CommandItem onSelect={() => setOpen(false)}>
          Settings
        </CommandItem>
      </CommandList>
    </CommandDialog>
  )
}
