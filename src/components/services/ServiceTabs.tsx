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
      <div role="tablist" aria-label="Social media services" className="mt-12 grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
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
              className={`flex h-[42px] items-center justify-center gap-2 rounded-[10px] border px-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${isActive ? "border-transparent bg-gradient-to-r from-[#f3b832] via-[#d54a5a] to-[#35125d] text-white shadow-sm" : "border-[#ef8d3d] bg-white text-foreground hover:bg-orange-50"}`}
              onClick={() => setActiveId(service.id)}
            >
              <span className="flex size-8 shrink-0 items-center justify-center bg-black/25 [clip-path:polygon(50%_0,93%_25%,93%_75%,50%_100%,7%_75%,7%_25%)]">
                <span className="flex size-[31px] items-center justify-center bg-white [clip-path:polygon(50%_0,93%_25%,93%_75%,50%_100%,7%_75%,7%_25%)]">
                  {service.icon ? (
                    <Image src={service.icon} alt="" width={20} height={20} className="size-5 rounded-md object-cover" />
                  ) : (
                    <span aria-hidden="true" className="text-sm text-foreground">{service.fallbackIcon}</span>
                  )}
                </span>
              </span>
              <span className="truncate">{service.name}</span>
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
