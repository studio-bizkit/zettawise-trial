"use client"

import React, { useState } from "react"

import { Switch } from "@/components/ui/switch"

interface BlurVignetteProps {
  className?: string
  radius?: string
  inset?: string
  transitionLength?: string
  blur?: string
  switchView?: boolean
}

export const BlurVignette = ({
  switchView,
  className = "",
  radius = "24px",
  inset = "16px",
  transitionLength = "32px",
  blur = "21px",
}: BlurVignetteProps) => {
  const [isEnabled, setIsEnabled] = useState(true)

  return (
    <div className={`fixed top-0 left-0 w-full h-[${transitionLength}] z-[50] pointer-events-none ${className}`}>
      <style>
        {`
          .blur-vignette {
            --radius: ${radius};
            --inset: ${inset};
            --transition-length: ${transitionLength};
            --blur: ${blur};
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(var(--blur));
            -webkit-backdrop-filter: blur(var(--blur));
            -webkit-mask-image: linear-gradient(to bottom, 
              black 0%,
              black var(--inset),
              transparent calc(var(--inset) + var(--transition-length))
            );
            -webkit-mask-size: 100% 100%;
            -webkit-mask-position: 0 0;
            -webkit-mask-repeat: no-repeat;
            opacity: 1;
            transition: opacity 0.3s ease;
            width: 100vw;
            left: 50%;
            transform: translateX(-50%);
          }

          .blur-vignette.active {
            opacity: 1;
          }
        `}
      </style>
      <div className={`blur-vignette ${isEnabled ? "active" : ""}`} />
      {switchView && (
        <div className="absolute right-4 top-4 flex items-center gap-2 pointer-events-auto">
          <Switch checked={isEnabled} onCheckedChange={setIsEnabled} />
        </div>
      )}
    </div>
  )
}
