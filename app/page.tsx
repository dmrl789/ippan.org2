export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-semibold tracking-tight">IPPAN Foundation</h1>
      <p className="mt-4 text-lg text-gray-700">
        Clean Next.js app ready for Vercel. Forum/auth/admin removed.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <a href="/about" className="rounded-2xl border p-6 hover:shadow">
          <h2 className="text-xl font-medium">About</h2>
          <p className="mt-2 text-sm text-gray-600">Mission, team, and contact.</p>
        </a>
        <a href="/news" className="rounded-2xl border p-6 hover:shadow">
          <h2 className="text-xl font-medium">News</h2>
          <p className="mt-2 text-sm text-gray-600">Updates and announcements.</p>
        </a>
      </div>
    </main>
  );
}
