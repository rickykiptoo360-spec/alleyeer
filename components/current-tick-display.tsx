'use client';

import type { Tick } from '../lib/types';
import type { ActiveSymbol } from '../lib/types';

interface CurrentTickDisplayProps {
  tick: Tick | null;
  lastDigit: number |null;
  activeSymbol: ActiveSymbol | null;
  pipSize: number;
}

export function CurrentTickDisplay({
  tick,
  lastDigit,
  activeSymbol,
}: CurrentTickDisplayProps) {
  if (!tick || !activeSymbol || lastDigit === null) {
    return (
      <div className="flex justify-center py-6">
        <div className="text-muted-foreground">Waiting for live ticks...</div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center py-6">

      <div className="text-sm text-muted-foreground mb-4">
        LIVE DIGIT CURSOR
      </div>

      <div className="flex gap-3 text-2xl font-bold font-mono">
        {[0,1,2,3,4,5,6,7,8,9].map((digit)=>(
          <div
            key={digit}
            className={`
              w-12 h-12
              rounded-full
              flex items-center
              justify-center
              transition-all
              duration-300
              ${
                digit===lastDigit
                  ? "bg-primary text-primary-foreground scale-125 shadow-lg"
                  : "bg-secondary text-secondary-foreground"
              }
            `}
          >
            {digit}
          </div>
        ))}
      </div>

      <div className="mt-5 text-lg font-semibold">
        Current Digit :
        <span className="text-primary ml-2">
          {lastDigit}
        </span>
      </div>

    </div>
  );
  }
