import { infoSVG } from "../../utils/svgCollection";
import { useRef } from "react";
import toggleInfo from "../../utils/toggleModal";
import InfoContent from "./InfoContent";

export default function ShowInfo() {
  const infoRef = useRef(null);

  return (
    <>
      <dialog ref={infoRef}>
        <InfoContent reference={infoRef} />
      </dialog>
      <button className="inline px-4" onClick={() => toggleInfo(infoRef)}>
        {infoSVG}
      </button>
    </>
  );
}
