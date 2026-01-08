'use client';

import { Layout } from '@/components/layout';
import { useLanguage } from '@/context/LanguageContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FileTextIcon, ClipboardIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import { Card } from '@/components/shared';
import {
  WelcomeBanner,
  StatCard,
  QuickActionButton,
  PaymentProgress,
  PaymentTimeline
} from '@/components/dashboard';

export default function Dashboard() {
  const { text } = useLanguage();
  const router = useRouter();

  const timelineItems = [
    { status: 'paid' as const },
    { status: 'paid' as const },
    { status: 'paid' as const },
    { status: 'paid' as const },
    { status: 'due' as const },
    { status: 'future' as const },
    { status: 'future' as const },
    { status: 'future' as const }
  ];
  
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Welcome Banner */}
        <WelcomeBanner 
          title="Welcome back!" 
          subtitle="Here's your student loan overview" 
        />
        
        {/* Payment Tracker Card */}
        <Card className="mb-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">{text.dashboard.paymentTracker}</h3>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Updated Today</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <StatCard 
              label={text.dashboard.nextPaymentDue}
              value="March 15"
              subtext="28 days remaining"
            />
            <StatCard 
              label="Current Balance"
              value="$23,200"
              subtext="↓ $12,450 paid so far"
              subtextColor="success"
            />
          </div>
          
          <PaymentProgress
            paidAmount="$12,450"
            remainingAmount="$23,200"
            percentage={35}
            paidLabel={text.dashboard.paid}
            remainingLabel={text.dashboard.remaining}
          />
        </Card>
        
        {/* Payment Timeline Card */}
        <Card className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{text.dashboard.paymentTimeline}</h3>
          <PaymentTimeline
            items={timelineItems}
            startLabel="January"
            endLabel="August"
          />
        </Card>
        
        {/* Quick Actions Card */}
        <Card>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{text.dashboard.quickActions}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <QuickActionButton
              icon={<FileTextIcon className="w-6 h-6 text-white" />}
              iconBgColor="bg-capital-blue"
              title={text.dashboard.viewMyLoans}
              subtitle="Review loan details"
              onClick={() => router.push('/loans')}
            />
            
            <QuickActionButton
              icon={<PlusCircledIcon className="w-6 h-6 text-white" />}
              iconBgColor="bg-green-600"
              title={text.dashboard.simulatePayment}
              subtitle="Calculate extra payments"
            />
            
            <QuickActionButton
              icon={<Image src="/images/eno.png" alt="Eno" width={48} height={48} className="object-cover" />}
              iconBgColor="bg-capital-red overflow-hidden"
              title={text.dashboard.askQuestion}
              subtitle="Chat with Eno assistant"
            />
            
            <QuickActionButton
              icon={<ClipboardIcon className="w-6 h-6 text-white" />}
              iconBgColor="bg-gray-700"
              title={text.dashboard.paymentHistory}
              subtitle="View past transactions"
            />
          </div>
        </Card>
      </div>
    </Layout>
  );
}
