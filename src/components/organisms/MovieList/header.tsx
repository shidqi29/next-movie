import Link from "next/link";

type HeaderProps = {
  title?: string;
  linkHref?: string;
  label?: string;
};

export const Header = ({ title, linkHref, label }: HeaderProps) => {
  return (
    <div className="flex items-center justify-between px-2 py-6">
      <h2 className="bg-primary text-background border-accent rounded-lg border-l-4 px-4 py-1 text-xl font-bold capitalize tracking-tight">
        {title}
      </h2>
      {linkHref && (
        <Link
          href={linkHref}
          className="hover:text-accent text-primary font-medium transition-colors hover:underline"
        >
          {label}
        </Link>
      )}
    </div>
  );
};
