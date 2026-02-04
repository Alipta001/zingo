'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderById } from '@/redux/slice/orderSlice';
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
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const [orderId, setOrderId] = useState<string | null>(null);

  const { currentOrder, loading } = useSelector((state: any) => state.order);

  useEffect(() => {
    // Get orderId from localStorage or URL params
    const paramOrderId = searchParams.get('orderId');
    const storedOrderId = typeof window !== 'undefined' ? localStorage.getItem('currentOrderId') : null;
    const id = paramOrderId || storedOrderId;

    if (id) {
      setOrderId(id);
      dispatch(getOrderById(id) as any);
    }
  }, [searchParams, dispatch]);

  const getStatusEvents = (status: string | undefined) => {
    const statusMap: { [key: string]: string } = {
      pending: 'done',
      confirmed: 'done',
      preparing: 'current',
      on_the_way: 'current',
      delivered: 'pending',
      cancelled: 'pending',
    };

    return [
      { id: 1, label: "Order Confirmed", time: "Now", status: 'done' },
      { id: 2, label: "Food Preparing", time: "~10 mins", status: statusMap[status?.toLowerCase() || 'pending'] === 'done' ? 'done' : 'pending' },
      { id: 3, label: "Out for Delivery", time: "~25 mins", status: status?.toLowerCase() === 'on_the_way' ? 'current' : status?.toLowerCase() === 'delivered' ? 'done' : 'pending' },
      { id: 4, label: "Delivered", time: "~35 mins", status: status?.toLowerCase() === 'delivered' ? 'done' : 'pending' },
    ];
  };

  const getOrderItems = () => {
    if (currentOrder?.items && Array.isArray(currentOrder.items)) {
      return currentOrder.items.map((item: any) => ({
        name: item.name || 'Item',
        qty: item.quantity || 1,
        price: item.price || 0,
      }));
    }
    return MOCK_ITEMS;
  };

  if (!orderId) {
    return (
      <main className="min-h-screen bg-[#FDFDFF] py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-2xl font-[1000] text-slate-900">No Order to Track</h1>
          <p className="text-slate-500 font-medium mt-2">Please select an order from your history</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FDFDFF] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-[1000] text-slate-900 tracking-tight">Track <span className="text-rose-600">Order.</span></h1>
          <p className="text-slate-500 font-medium">Sit back, your food is on the way!</p>
          {currentOrder && (
            <p className="text-slate-600 font-semibold mt-2">
              Order #{currentOrder.id || currentOrder.order_id} • {currentOrder.restaurant_name || 'Restaurant'}
            </p>
          )}
        </header>

        <TrackingStepper />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <LiveTimeline events={currentOrder ? getStatusEvents(currentOrder.status) : MOCK_EVENTS} />
          </div>
          <div className="lg:col-span-5 space-y-6">
            <OrderSummary items={getOrderItems()} />
            <LiveMap />
          </div>
        </div>
      </div>
    </main>
  );
}