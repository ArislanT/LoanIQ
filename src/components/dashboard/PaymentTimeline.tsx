'use client';

interface TimelineItem {
  status: 'paid' | 'due' | 'future';
}

interface PaymentTimelineProps {
  items: TimelineItem[];
  startLabel: string;
  endLabel: string;
  paidText?: string;
  dueText?: string;
  futureText?: string;
}

// payment timeline component
export default function PaymentTimeline({ 
  items, 
  startLabel, 
  endLabel,
  paidText = 'Paid',
  dueText = 'Due Soon',
  futureText = 'Future'
}: PaymentTimelineProps) {
  const getStatusStyles = (status: 'paid' | 'due' | 'future') => {
    switch (status) {
      case 'paid':
        return { dot: 'bg-green-500 border-white ring-green-500', label: 'text-green-700' };
      case 'due':
        return { dot: 'bg-yellow-400 border-white ring-yellow-400 animate-pulse', label: 'text-yellow-700' };
      case 'future':
        return { dot: 'bg-gray-300 border-white ring-gray-300', label: 'text-gray-500' };
    }
  };

  const getStatusText = (status: 'paid' | 'due' | 'future') => {
    switch (status) {
      case 'paid': return paidText;
      case 'due': return dueText;
      case 'future': return futureText;
    }
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center py-8">
        {items.map((item, index) => {
          const styles = getStatusStyles(item.status);
          return (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className={`w-5 h-5 rounded-full border-4 ring-2 ${styles.dot}`} />
              <span className={`text-xs font-medium ${styles.label}`}>{getStatusText(item.status)}</span>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between text-xs text-gray-600 font-medium">
        <span>{startLabel}</span>
        <span>{endLabel}</span>
      </div>
    </div>
  );
}
