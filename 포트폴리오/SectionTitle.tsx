export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-8 print-avoid-break">
      <div className="w-1 h-8 bg-[#2563EB]" />
      <h2 className="text-[32px] leading-[1.4]" style={{ fontWeight: 700 }}>
        {children}
      </h2>
    </div>
  );
}