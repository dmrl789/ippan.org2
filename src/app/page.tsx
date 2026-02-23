export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
      <div className="max-w-2xl">
        <div className="mb-10 h-px bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0" />

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          We are upgrading IPPAN.
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
          The first deterministic BlockDAG engineered for verifiable execution at
          internet scale.
        </p>

        <p className="mt-8 text-base text-muted/70">
          Infrastructure update in progress.
        </p>
        <p className="text-base text-muted/70">Please check back soon.</p>

        <div className="mt-10 h-px bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0" />
      </div>

      <footer className="absolute bottom-8 text-sm text-muted/50">
        IPPAN Foundation 2026
      </footer>
    </div>
  );
}
