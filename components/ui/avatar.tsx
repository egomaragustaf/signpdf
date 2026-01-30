"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

function Avatar({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> & {
  size?: "xs" | "sm" | "default" | "lg" | "xl"
}) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(
        "group/avatar relative flex shrink-0 overflow-hidden rounded-full select-none ring-2 ring-transparent ring-offset-2 ring-offset-background transition-all duration-200 focus-visible:ring-ring focus-visible:ring-offset-2",
        "data-[size=xs]:size-6 data-[size=xs]:ring-1",
        "data-[size=sm]:size-8",
        "data-[size=default]:size-10",
        "data-[size=lg]:size-12",
        "data-[size=xl]:size-16",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full object-cover transition-transform duration-200 group-hover/avatar:scale-105", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted text-muted-foreground flex size-full items-center justify-center rounded-full font-medium transition-colors duration-200",
        "data-[size=xs]:text-xs",
        "data-[size=sm]:text-sm",
        "data-[size=default]:text-base",
        "data-[size=lg]:text-lg",
        "data-[size=xl]:text-2xl",
        className
      )}
      {...props}
    />
  )
}

function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "bg-success text-success-foreground ring-background absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full ring-2 select-none",
        "data-[size=xs]/avatar:size-2 data-[size=xs]/avatar:[&>svg]:hidden",
        "data-[size=sm]/avatar:size-2.5 data-[size=sm]/avatar:[&>svg]:size-3",
        "data-[size=default]/avatar:size-3 data-[size=default]/avatar:[&>svg]:size-3.5",
        "data-[size=lg]/avatar:size-3.5 data-[size=lg]/avatar:[&>svg]:size-4",
        "data-[size=xl]/avatar:size-5 data-[size=xl]/avatar:[&>svg]:size-5",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroup({ className, max = 5, ...props }: React.ComponentProps<"div"> & { max?: number }) {
  return (
    <div
      data-slot="avatar-group"
      data-max={max}
      className={cn(
        "*:data-[slot=avatar]:ring-background group/avatar-group flex items-center",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroupCount({
  className,
  count,
  ...props
}: React.ComponentProps<"div"> & { count: number }) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "bg-muted text-muted-foreground ring-background relative flex shrink-0 items-center justify-center rounded-full text-sm font-semibold ring-2",
        "data-[size=xs]/avatar-group:size-6 data-[size=xs]/avatar-group:text-xs",
        "data-[size=sm]/avatar-group:size-8 data-[size=sm]/avatar-group:text-xs",
        "data-[size=default]/avatar-group:size-10 data-[size=default]/avatar-group:text-sm",
        "data-[size=lg]/avatar-group:size-12 data-[size=lg]/avatar-group:text-base",
        "data-[size=xl]/avatar-group:size-16 data-[size=xl]/avatar-group:text-lg",
        className
      )}
      aria-label={`${count} more members`}
      {...props}
    >
      +{count > 99 ? "99" : count}
    </div>
  )
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
}
