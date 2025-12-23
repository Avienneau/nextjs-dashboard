import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <>
      <Card title="Collected" value={totalPaidInvoices} type="collected" testid="dashboard-collected-card"/>
      <Card title="Pending" value={totalPendingInvoices} type="pending" testid="dashboard-pending-card"/>
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" testid="dashboard-total-invoices-card" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
        testid="dashboard-total-customers-card"
      />
    </>
  );
}

export function Card({
  title,
  value,
  type,
  testid,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
  testid: string;
}) {
  const Icon = iconMap[type];

  return (
    <div data-testid={testid} className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
