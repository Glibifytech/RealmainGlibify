import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GlibifyLogo } from "@/components/glibify-logo"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <GlibifyLogo className="h-8 w-8" />
              <span className="ml-2 font-bold text-xl text-black">Glibify</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Explore Courses
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                About Glibify
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Communities
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button className="bg-[#0000FF] hover:bg-[#0000CC] text-white rounded-full px-6">Log in</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
