export default function StartButtons() {
  return (
    <div className="flex flex-col justify-center w-full">
      <div className="w-4/5 m-auto">
        <h2 className="inline">select a level:</h2>
        <button className="inline px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="inline size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
        </button>
      </div>
      <div className="w-full text-center">
        <button className="px-2 mx-1 text-sm border-2 border-white rounded-lg w-fit xl:w-1/4">
          Chill 🟢
        </button>
        <button className="px-1 mx-1 text-sm border-2 border-white rounded-lg w-fit xl:w-1/4">
          Motivated 🟡
        </button>
        <button className="px-2 mx-1 text-sm border-2 border-white rounded-lg w-fit xl:w-1/4">
          Guru 🔴
        </button>
      </div>
    </div>
  );
}
