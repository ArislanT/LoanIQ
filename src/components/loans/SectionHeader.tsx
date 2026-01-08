'use client';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

/**
 * SectionHeader - Title + subtitle header for categorized sections
 * Used for loan categories, policy sections, etc.
 */
export default function SectionHeader({ 
  title, 
  subtitle 
}: SectionHeaderProps) {
  return (
    <div className="mb-5">
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
    </div>
  );
}

