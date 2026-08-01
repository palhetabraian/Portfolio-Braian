type TechTagProps = {
  label: string;
};

export function TechTag({ label }: TechTagProps) {
  return (
    <span className="inline-flex min-h-7 items-center rounded-full border border-border bg-surface px-3 text-[11px] font-bold text-text">
      {label}
    </span>
  );
}
