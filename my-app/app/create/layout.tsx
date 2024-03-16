export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <form>
      <h2>Create Layout</h2>
      {children}
    </form>
  )
}