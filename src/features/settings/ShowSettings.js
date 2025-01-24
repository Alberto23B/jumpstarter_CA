import { settingSVG } from "../../utils/svgCollection";

export default function ShowSettings() {
  return (
    <div className="pr-2 my-auto">
      <button className="inline">{settingSVG}</button>
      <p className="inline mx-2">customize</p>
    </div>
  );
}
