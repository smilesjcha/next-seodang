export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* TODO: 사이드바 네비게이션 */}
      <aside className="w-64 border-r">
        <nav>{/* 사이드바 메뉴 */}</nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
