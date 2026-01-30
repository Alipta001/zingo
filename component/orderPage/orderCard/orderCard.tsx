import React from "react";
import { MapPin, Clock, Star, RotateCcw, ChevronRight } from "lucide-react";
import { BaseURL } from "@/api/axios/axios";

export default function OrderCard({ order }) {
  const status = order.status?.toLowerCase() || "delivered";
  const isDelivered = status === "delivered";
  const isCancelled = status === "cancelled";

  return (
    <article
      className="
        relative overflow-hidden rounded-2xl border border-red-100
        bg-gradient-to-br from-white via-red-50/40 to-white
        transition-all duration-500
        hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(220,38,38,0.35)]
        group cursor-pointer
      "
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5 pointer-events-none" />

      <div className="p-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* LEFT */}
          <div className="flex gap-5 flex-1">
            {/* Image */}
            <div className="relative flex-shrink-0">
              <div className="w-24 h-24 rounded-2xl overflow-hidden border border-red-100 bg-gray-100">
                <img
                  src={`${BaseURL}/${order.image}`}
                  alt={order.name}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Order ID */}
              <div
                className="
                  absolute -top-2 -right-2
                  bg-gradient-to-r from-red-600 to-red-500
                  text-white text-xs font-bold px-2.5 py-1
                  rounded-lg shadow-md
                "
              >
                #{order.id}
              </div>
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-2">
                {order.name}
              </h3>

              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mt-0.5 text-red-400" />
                  <span className="line-clamp-1 font-medium">
                    {order.address}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-red-400" />
                  <span className="font-medium">{order.time}</span>
                </div>

                {/* Status */}
                <span
                  className={`
                    inline-flex items-center gap-2 mt-2 px-3 py-1.5 rounded-xl text-xs font-semibold
                    ${
                      isDelivered
                        ? "bg-emerald-50 text-emerald-700"
                        : isCancelled
                          ? "bg-red-50 text-red-700"
                          : "bg-orange-50 text-orange-700"
                    }
                  `}
                >
                  <span
                    className={`
                      w-2 h-2 rounded-full animate-pulse
                      ${
                        isDelivered
                          ? "bg-emerald-500"
                          : isCancelled
                            ? "bg-red-500"
                            : "bg-orange-500"
                      }
                    `}
                  />
                  {order.status}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex flex-col gap-3 lg:min-w-[210px]">
            <button
              className="
                relative overflow-hidden
                flex items-center justify-center gap-2
                rounded-xl px-5 py-3 font-semibold text-white
                bg-gradient-to-r from-red-600 to-red-500
                transition-all duration-300
                hover:shadow-lg hover:shadow-red-500/30
                active:scale-95 cursor-pointer
              "
            >
              <RotateCcw className="w-4 h-4" />
              Reorder
              <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity" />
            </button>

            <button
              className="
                flex items-center justify-center gap-2
                rounded-xl px-5 py-3 font-semibold
                border border-red-200 text-red-600
                bg-white
                transition-all duration-300
                hover:bg-red-50 hover:shadow-md
                active:scale-95  cursor-pointer
              "
            >
              <Star className="w-4 h-4" />
              Rate Order
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div
        className="
          flex flex-wrap items-center justify-between gap-4
          px-6 py-4 border-t border-red-100
          bg-gradient-to-r from-red-50/60 to-white
        "
      >
        <p className="text-sm text-gray-600 font-medium">
          Order placed on{" "}
          <span className="text-gray-900 font-semibold">{order.time}</span>
        </p>

        <button
          className="
            flex items-center gap-1.5
            text-sm font-semibold text-red-600
            transition-all duration-300
            hover:gap-3 hover:text-red-700 cursor-pointer
          "
        >
          View Details
          <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
        </button>
      </div>
    </article>
  );
}
