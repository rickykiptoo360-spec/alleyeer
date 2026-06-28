'use client';

import { useEffect, useRef, useState } from 'react';
import type { Tick } from '../lib/types';
import type { ActiveSymbol } from '../lib/types';
export function CurrentTickDisplay({
    tick,
    lastDigit,
    activeSymbol,
}: CurrentTickDisplayProps) {

    const digitRefs = useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    const [cursorLeft, setCursorLeft] = useState(0);

    useEffect(() => {
        if (lastDigit === null) return;

        const active = digitRefs.current[lastDigit];
        const container = containerRef.current;

        if (!active || !container) return;

        const activeRect = active.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        setCursorLeft(
            activeRect.left -
            containerRect.left +
            activeRect.width / 2
        );

    }, [lastDigit]);

    if (!tick || !activeSymbol || lastDigit === null) {
        return (
            <div className="flex justify-center py-10">
                Waiting for live ticks...
            </div>
        );
}
  return (

<div
ref={containerRef}
className="relative w-full max-w-5xl mx-auto rounded-xl bg-[#10131d] border border-cyan-700 p-8 overflow-hidden"
>

<div className="text-center mb-6">

<h2 className="text-cyan-400 font-bold text-xl">
ALLEYEER LIVE DIGITS
</h2>

<p className="text-gray-400">
Moving Cursor Interface
</p>

</div>
  <div className="flex justify-between">

{[0,1,2,3,4,5,6,7,8,9].map((digit)=>(
<div
key={digit}
ref={(el)=>digitRefs.current[digit]=el}

className={`

w-14
h-14
rounded-full
border-2

flex
items-center
justify-center

text-lg
font-bold

transition-all
duration-300

${digit===lastDigit

? "border-cyan-400 bg-cyan-900 text-white scale-110"

: "border-gray-700 bg-[#1b2030] text-gray-300"

}

`}
>

{digit}

</div>
))}

</div>
