interface SectionTitleProps {
  children: React.ReactNode;
  prefix?: string;
}

export function SectionTitle({ children, prefix = '//' }: SectionTitleProps) {
  return (
    <div className="section-title-wrapper">
      <span className="section-title-prefix" aria-hidden="true">{prefix}</span>
      <h2 className="section-title">{children}</h2>
      <div className="section-title-line" aria-hidden="true" />
    </div>
  );
}
