'use client';

interface DigitDashboardProps {
  lastDigit: number;
  percentages?: number[];
}

export default function DigitDashboard({
  lastDigit,
  percentages = [10,10,10,10,10,10,10,10,10,10],
}: DigitDashboardProps) {

  return (
    <div className="w-full rounded-2xl bg-[#111827] border border-cyan-500 p-6">

      <h2 className="text-center text-cyan-400 text-xl font-bold mb-6">
        Alleyeer V2
      </h2>

      <div className="relative">

        <div className="grid grid-cols-5 gap-4">

          {[0,1,2,3,4,5,6,7,8,9].map((digit)=>(
            <div
              key={digit}
              className="flex flex-col items-center"
            >

              <div
                className={`w-14 h-14 rounded-full border-2 flex items-center justify-center font-bold transition-all duration-300 ${
                  digit===lastDigit
                  ? "border-cyan-400 bg-cyan-500/20 text-cyan-300 shadow-lg shadow-cyan-500/50 scale-110"
                  : "border-gray-600 text-white"
                }`}
              >
                {digit}
              </div>

              <span className="text-xs text-gray-400 mt-2">
                {percentages[digit].toFixed(1)}%
              </span>

            </div>
          ))}

        </div>

        <div
          className="absolute transition-all duration-300"
          style={{
            left:`${(lastDigit%5)*20+10}%`,
            top:lastDigit<5?"84px":"190px"
          }}
        >
          <div className="w-8 h-1 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400"></div>
        </div>

      </div>

      <div className="mt-8 text-center">

        <div className="text-gray-400">
          Current Digit
        </div>

        <div className="text-5xl font-bold text-cyan-400">
          {lastDigit}
        </div>

      </div>

    </div>
  );
}
