import { Inter } from 'next/font/google'
import { LanguageProvider } from '@/context/LanguageContext'
import { InterfaceProvider } from '@/context/InterfaceContext'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@/index.css'

const inter = Inter({ subsets: ['latin'] })

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <LanguageProvider>
            <InterfaceProvider>
              <TooltipProvider>
                <Toaster />
                <Sonner />
                {children}
              </TooltipProvider>
            </InterfaceProvider>
          </LanguageProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}