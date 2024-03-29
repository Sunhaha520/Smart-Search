import React, { FC } from "react";

export const Logo: FC = () => {
  return (
    <div className="flex gap-4 items-center justify-center cursor-default select-none relative">
      <div className="h-10 w-10">
        <svg
          className="icon"
          viewBox="0 0 1066 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
        >
          <path
            d="M1024.730337 511.697055A511.697055 511.697055 0 1 1 513.033282 0a511.697055 511.697055 0 0 1 511.697055 511.697055z"
            fill="#FDDF6D"
            p-id="94833"
          />
          <path
            d="M622.682651 947.879347a511.697055 511.697055 0 0 1-342.312127-892.008083A511.697055 511.697055 0 1 0 854.70136 892.008083a508.315797 508.315797 0 0 1-232.662758 55.871264z"
            fill="#FCC56B"
            p-id="94834"
          />
          <path
            d="M572.446817 353.260963a148.453331 148.453331 0 1 1-148.453331-148.453331 148.453331 148.453331 0 0 1 148.453331 148.453331zM988.663585 353.260963a148.453331 148.453331 0 1 1-148.453331-148.453331 148.453331 148.453331 0 0 1 148.453331 148.453331z"
            fill="#FFFFFF"
            p-id="94835"
          />
          <path
            d="M293.090495 558.068595a68.752248 68.752248 0 0 0-68.752248 68.752247h137.665508a68.91326 68.91326 0 0 0-68.91326-68.752247zM893.344309 548.890894a68.752248 68.752248 0 0 0-68.752247 68.752248h137.504495a68.752248 68.752248 0 0 0-68.752248-68.752248z"
            fill="#F9A880"
            p-id="94836"
          />
          <path
            d="M727.018614 717.953798H505.304692a20.770585 20.770585 0 1 1 0-41.541171h221.713922a20.770585 20.770585 0 1 1 0 41.541171zM490.491561 353.260963a41.702183 41.702183 0 1 1-41.54117-41.541171 41.541171 41.541171 0 0 1 41.54117 41.541171zM912.987809 353.260963A41.702183 41.702183 0 1 1 870.802589 311.719792a41.702183 41.702183 0 0 1 41.702183 41.541171z"
            fill="#7F184C"
            p-id="94837"
          />
          <path
            d="M604.971299 77.768936c56.676326 16.101229 95.480288 54.905191 86.463599 86.624611S629.284155 209.315976 572.446817 193.214747s-95.6413-54.744178-86.624612-86.463599 62.955805-45.083441 119.149094-28.982212z"
            fill="#FCEB88"
            p-id="94838"
          />
        </svg>
      </div>
      <div className="text-center font-medium text-2xl md:text-3xl text-zinc-950 relative text-nowrap">
        呆瓜搜索
      </div>
      <div className="transform scale-75 origin-left border items-center rounded-lg bg-gray-100 px-2 py-1 text-xs font-medium text-zinc-600">
        beta
      </div>
    </div>
  );
};
