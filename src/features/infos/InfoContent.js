import { clearSVG } from "../../utils/svgCollection";
import toggleInfo from "../../utils/toggleModal";
import { useState } from "react";

export default function InfoContent({ reference }) {
  const [pageOne, setPageOne] = useState(true);

  return (
    <div className="bg-black border-2 border-white w-96">
      <div className="flex justify-end text-white bg-black">
        <button onClick={() => toggleInfo(reference)}>{clearSVG}</button>
      </div>
      <div className="mx-auto text-white">
        <div>
          <h2 className="p-5 text-2xl text-center">how it works?</h2>
          {pageOne ? (
            <p className="p-5">
              This is a productivity game. As a noob, your goal is to finish
              your tasks As a pro, your goal is to speedrun your tasks. When you
              press START, the first timer will start. When a task is finished
              on time, the next one will start right away. If you fail a task,
              the next one won’t start until you close the dialog window about
              the previous failing. As a setting, you can chose to have a set
              break between every task (check out settings tab)`
            </p>
          ) : (
            <table className="mx-auto my-5 text-center border-2 border-white">
              <thead>
                <tr>
                  <th className="w-1/3 border">level</th>
                  <th className="w-1/3 border">time</th>
                  <th className="w-1/3 border">penalty</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="w-1/3 border">chill</td>
                  <td className="w-1/3 border">100%</td>
                  <td className="w-1/3 border">/</td>
                </tr>
                <tr>
                  <td className="w-1/3 border">motivated</td>
                  <td className="w-1/3 border">90%</td>
                  <td className="w-1/3 border">/</td>
                </tr>
                <tr>
                  <td className="w-1/3 border">guru</td>
                  <td className="w-1/3 border">80%</td>
                  <td className="w-1/3 border">-1</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
        <button
          className="mx-auto text-center"
          onClick={() => setPageOne(!pageOne)}
        >
          {pageOne ? `next ->` : "<- prev"}
        </button>
      </div>
    </div>
  );
}
