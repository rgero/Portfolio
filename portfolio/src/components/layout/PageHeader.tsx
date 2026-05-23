type PageHeaderProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <header className="mb-8 border-b border-border pb-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-sans text-3xl font-bold tracking-tight text-text md:text-4xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-2 max-w-2xl text-sm text-text-muted">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </header>
  );
}
