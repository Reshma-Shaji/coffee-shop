export default function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full bg-[#F6EBDD]">
      {children}
    </div>
  );
}