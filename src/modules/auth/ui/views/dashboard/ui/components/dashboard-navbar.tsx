import { Button } from "@/components/ui/button"
import {
  PanelLeftIcon,
  PanelLeftCloseIcon,
  Home,
  SearchIcon
} from "lucide-react"
import { useSidebar } from "@/components/ui/sidebar"
import { useState } from "react"
import { useEffect } from "react"
import { DashboardCommand } from "./DashboardCommand"

export const DashboardNavbar = () => {
  const { state, toggleSidebar, isMobile } = useSidebar()
  const [commandOpen, setCommandOpen] = useState(false)

  useEffect(() => {
  const down = (e: KeyboardEvent) => {
    if (
      e.key.toLowerCase() === "k" &&
      (e.metaKey || e.ctrlKey)
    ) {
      e.preventDefault()
      setCommandOpen((open) => !open)
    }
  }

  document.addEventListener("keydown", down)
  return () => document.removeEventListener("keydown", down)
}, [])

  return (
    <>
    <DashboardCommand open={commandOpen} setOpen={setCommandOpen} />
    <nav className="flex items-center gap-x-2 px-4 py-3 border-b bg-background">

      <Button
        className="size-9"
        variant="outline"
        onClick={toggleSidebar}
      >
        {(state === "collapsed" || isMobile) ? (
          <PanelLeftIcon className="size-4" />
        ) : (
          <PanelLeftCloseIcon className="size-4" />
        )}
      </Button>


      <Button
        className="ml-2 h-9 w-[260px] justify-start gap-2 font-normal text-muted-foreground"
        variant="outline"
        size="sm"
        onClick={() => {
            setCommandOpen((open) => !open)
        }}
      >
        <SearchIcon className="size-4" />
        Search

        <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
    </nav>
    </>
  )
}

