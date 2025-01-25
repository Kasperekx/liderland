import * as React from "react"
import { cn } from "@/lib/utils"

interface IconCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function IconCard({ 
  icon, 
  title, 
  description, 
  className,
  ...props 
}: IconCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-white/50 backdrop-blur-sm p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10 hover:-translate-y-1 border border-pink-100/50",
        className
      )}
      {...props}
    >
      <div className="space-y-4">
        <div className="inline-flex p-3 rounded-2xl bg-pink-100 text-pink-600">
          {icon}
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-br from-pink-100/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  )
} 