export default function Overlay({ children }) {
  return (
    <div className="absolute hidden w-1/2 mx-auto transform -translate-x-1/2 -translate-y-1/2 bg-black border-2 border-white top-1/2 left-1/2 h-1/2">
      {children}
    </div>
  );
}
