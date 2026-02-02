import TrackingStepper from './TrackingStepper';
import LiveTimeline from './LiveTimeline';
import OrderSummary from './OrderSummary';
import LiveMap from './LiveMap';

const MOCK_EVENTS = [
  { id: 1, label: "Food Prepared", time: "07:30 PM", status: 'done' },
  { id: 2, label: "Out for Delivery", time: "07:50 PM", status: 'done' },
  { id: 3, label: "Arriving Soon", time: "08:15 PM", status: 'current' },
  { id: 4, label: "Delivered", time: "08:30 PM", status: 'pending' },
];

const MOCK_ITEMS = [
  { name: "Zinger Burger", qty: 1, price: 199 },
  { name: "Pepsi Can", qty: 1, price: 55 },
];

export default function OrderTrackingPage() {
  return (
    <main className="min-h-screen bg-[#FDFDFF] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-[1000] text-slate-900 tracking-tight">Track <span className="text-rose-600">Order.</span></h1>
          <p className="text-slate-500 font-medium">Sit back, your food is on the way!</p>
        </header>

        <TrackingStepper />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <LiveTimeline events={MOCK_EVENTS} />
          </div>
          <div className="lg:col-span-5 space-y-6">
            <OrderSummary items={MOCK_ITEMS} />
            <LiveMap />
          </div>
        </div>
      </div>
    </main>
  );
}