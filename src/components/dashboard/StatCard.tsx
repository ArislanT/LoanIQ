'use client';

interface StatCardProps {
  label: string;
  value: string;
  subtext?: string;
  subtextColor?: 'default' | 'success' | 'warning' | 'danger';
}

// stat card component
export default function StatCard({ 
  label, 
  value, 
  subtext, 
  subtextColor = 'default' 
}: StatCardProps) {
  const subtextColorClasses = {
    default: 'text-gray-600',
    success: 'text-green-600 font-medium',
    warning: 'text-yellow-600 font-medium',
    danger: 'text-red-600 font-medium'
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
      <div className="text-sm font-semibold text-gray-600 mb-2">{label}</div>
      <div className="text-3xl font-bold text-gray-900">{value}</div>
      {subtext && (
        <div className={`text-sm mt-1 ${subtextColorClasses[subtextColor]}`}>
          {subtext}
        </div>
      )}
    </div>
  );
}
