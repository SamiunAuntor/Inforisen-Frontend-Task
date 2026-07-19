"use client";

import Image from "next/image";
import { useState } from "react";
import { platformServices } from "@/data/platformServices";
import { ServiceDetail } from "./ServiceDetail";

export function ServiceTabs() {
  const [activeId, setActiveId] = useState(platformServices[0].id);
  const activeService = platformServices.find((service) => service.id === activeId) ?? platformServices[0];

  return (
    <>
      <div
        role="tablist"
        aria-label="Social media services"
        className="mt-10 grid w-full grid-cols-1 gap-3 min-[430px]:grid-cols-2 sm:mt-12 sm:grid-cols-3 lg:mt-14 lg:grid-cols-6 lg:gap-x-3 lg:gap-y-4"
      >
        {platformServices.map((service) => {
          const isActive = service.id === activeId;

          return (
            <button
              key={service.id}
              type="button"
              role="tab"
              id={`service-tab-${service.id}`}
              aria-selected={isActive}
              aria-controls="service-panel"
              className={`flex h-14 min-w-0 items-center justify-center gap-2 rounded-xl border px-2 py-2 text-sm font-semibold transition sm:gap-3 sm:px-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:text-base ${isActive ? "border-[#efb83a] bg-gradient-to-r from-[#f3bd35] via-[#d44b59] to-[#35125d] text-white shadow-[0_4px_10px_rgba(55,24,45,0.12)]" : "border-[#ef8d3d] bg-white text-foreground hover:bg-orange-50"}`}
              onClick={() => setActiveId(service.id)}
            >
              {service.icon ? (
                <Image
                  src={service.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="size-10 shrink-0 object-contain"
                />
              ) : (
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-sm text-foreground">
                  {service.fallbackIcon}
                </span>
              )}
              <span className="min-w-0 truncate">{service.name}</span>
            </button>
          );
        })}
      </div>

      <div id="service-panel" role="tabpanel" aria-labelledby={`service-tab-${activeService.id}`}>
        <ServiceDetail service={activeService} />
      </div>
    </>
  );
}
