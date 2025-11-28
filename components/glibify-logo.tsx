import Image from "next/image"

export function GlibifyLogo({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/Glibify-logo.png"
        alt="Glibify Logo"
        width={32}
        height={32}
        className="w-full h-full object-contain"
      />
    </div>
  )
}
