import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <p className="text-6xl font-bold text-primary">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-foreground">
          Page not found
        </h1>
        <p className="mt-2 text-text-secondary">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center mt-6 px-6 py-3 bg-foreground text-background font-medium text-sm rounded-lg hover:bg-neutral-800 transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
