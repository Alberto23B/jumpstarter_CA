import ShowInfo from "../infos/ShowInfo";

export default function StartedGame() {
  return (
    <>
      <div className="flex flex-col justify-center w-full">
        <div className="w-4/5 m-auto text-center">
          <h2 className="inline ">game started!</h2>
          <ShowInfo />
        </div>
        <div className="w-full text-center">
          <button className="px-2 mx-1 text-sm border-2 border-white rounded-lg w-fit">
            Stop!
          </button>
        </div>
      </div>
      <div className="flex">
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
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
        <p className="mx-2">0</p>
      </div>
    </>
  );
}