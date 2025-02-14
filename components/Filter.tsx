import { filters } from "@/constants";

export default function Filter() {
  return (
    <div className="space-y-2 sticky top-2">
      <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
          <span className="text-sm font-medium">Space</span>
          <span className="transition group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </summary>
        <div className="border-t border-gray-200 bg-white">
          <ul className="space-y-1 border-t border-gray-200 p-4">
            {filters.map((filter) => (
              <li key={filter.id}>
                <label htmlFor={filter.id} className="inline-flex items-center gap-2">
                  <input type="checkbox" id={filter.id} className="size-5 rounded border-gray-300" />
                  <span className="text-sm font-medium text-gray-700">{filter.label}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </details>
      <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
          <span className="text-sm font-medium">Min Price</span>
          <span className="transition group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </summary>
        <div className="border-t border-gray-200 bg-white">
          <div className="border-t border-gray-200 p-4">
            <div className="flex justify-start w-full gap-4">
              <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Ksh</span>
                <input
                  type="number"
                  id="FilterPriceFrom"
                  placeholder="From"
                  className="w-full rounded-md py-2 px-3 border-gray-200 shadow-sm sm:text-sm"
                />
              </label>
            </div>
          </div>
        </div>
      </details>
      <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
          <span className="text-sm font-medium">Max Price</span>
          <span className="transition group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </summary>
        <div className="border-t border-gray-200 bg-white">
          <div className="border-t border-gray-200 p-4">
            <div className="flex justify-start w-full gap-4">
              <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Ksh</span>
                <input
                  type="number"
                  id="FilterPriceTo"
                  placeholder="To"
                  className="w-full rounded-md py-2 px-3 border-gray-200 shadow-sm sm:text-sm"
                />
              </label>
            </div>
          </div>
        </div>
      </details>
    </div>
  );
}
