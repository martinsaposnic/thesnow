"use client"

/**
 * ThemeProvider component that wraps the application
 * This enables dark/light theme switching throughout the site
 * Using next-themes library for seamless theme management
 */

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

