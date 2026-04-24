type StatCardProps = {
  value: string;
  label: string;
  compact?: boolean;
};

export function StatCard({
  value,
  label,
  compact = false,
}: StatCardProps) {
  return (
    <div
      className={`bg-[#EFF6FF] rounded-lg border border-[#E5E7EB] print-avoid-break flex flex-col justify-center ${
        compact ? "p-4 min-h-[132px]" : "p-5 min-h-[148px]"
      }`}
    >
      <div
        className={`stat-value text-[#2563EB] mb-2 ${compact ? "stat-value-compact" : ""}`}
        style={{ fontWeight: 700 }}
      >
        {value}
      </div>
      <div className="stat-label text-[#6B7280]">{label}</div>
    </div>
  );
}