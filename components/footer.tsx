export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} David Flynn-Coutts. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
