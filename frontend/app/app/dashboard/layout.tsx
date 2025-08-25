import SubNavbar from "./selector";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <main className="w-full">
          {/* Sub Navbar at the top */}
          <SubNavbar />

          {/* Page Content */}
          <div className="mt-6">{children}</div>
        </main>
      </body>
    </html>
  )
}
