'use client';

type TagVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger';

interface TagChipProps {
  label: string;
  variant?: TagVariant;
}

// tag chip component
export default function TagChip({ label, variant = 'default' }: TagChipProps) {
  const variantColors: Record<TagVariant, string> = {
    default: 'bg-gray-100 text-gray-700 border-gray-200',
    primary: 'bg-blue-50 text-capital-blue border-blue-200',
    success: 'bg-green-50 text-green-700 border-green-200',
    warning: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    danger: 'bg-red-50 text-red-700 border-red-200'
  };

  return (
    <span className={`px-3 py-1.5 rounded-md text-sm font-medium border ${variantColors[variant]}`}>
      {label}
    </span>
  );
}
