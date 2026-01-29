export const metadata = {
  title: 'About',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <h1>Gay</h1>
        <main>{children}</main>
      </body>
    </html>
  )
}
