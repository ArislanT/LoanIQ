'use client';

type StatusType = 'active' | 'upcoming' | 'changed' | 'success' | 'warning' | 'info';

interface StatusBadgeProps {
  status: StatusType;
  label: string;
}

// status badge component
export default function StatusBadge({ status, label }: StatusBadgeProps) {
  const statusColors: Record<StatusType, string> = {
    active: 'bg-green-100 text-green-800 border-green-200',
    upcoming: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    changed: 'bg-blue-100 text-blue-800 border-blue-200',
    success: 'bg-green-100 text-green-800 border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    info: 'bg-blue-100 text-blue-800 border-blue-200'
  };

  return (
    <span className={`px-3 py-1 rounded-md text-xs font-semibold border ${statusColors[status]}`}>
      {label}
    </span>
  );
}
