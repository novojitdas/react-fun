import { useState } from "react";
import data from "./data";

const Accordion: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedArray, setSelectedArray] = useState<string[]>([]);
  const [selectionBtn, setSelectionBtn] = useState<boolean>(false);

  const handleSelection = (getCurrentId: string) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultipleSelection = (getCurrentId: string) => {
    const cpyArray = [...selectedArray];
    const indexOfCurrentId = cpyArray.indexOf(getCurrentId);

    if (indexOfCurrentId === -1) {
      cpyArray.push(getCurrentId);
    } else {
      cpyArray.splice(indexOfCurrentId, 1);
    }
    setSelectedArray(cpyArray);
    console.log(cpyArray);
  };

  return (
    <div className="p-6 m-6 w-[500px] text-white">
      <div className="flex justify-center items-center">
        <button
          className="bg-orange-800 p-2 mb-4"
          onClick={() => setSelectionBtn(!selectionBtn)}
        >
          {selectionBtn === true
            ? "Enable Single Selection"
            : "Enable Multiple Selection"}
        </button>
      </div>
      {data && data.length > 0 ? (
        data.map((dataItem) => (
          <div key={dataItem.id} className="bg-orange-800 mb-4">
            <h3
              onClick={
                selectionBtn === true
                  ? () => handleMultipleSelection(dataItem.id)
                  : () => handleSelection(dataItem.id)
              }
            >
              {dataItem.question}
            </h3>
            <span>
              {selected === dataItem.id && selected !== null ? "-" : "+"}
            </span>
            {selected === dataItem.id ||
            selectedArray.indexOf(dataItem.id) !== -1 ? (
              <div className="text-xs border border-black border-solid p-2">
                {dataItem.answer}
              </div>
            ) : null}
          </div>
        ))
      ) : (
        <div>data not found</div>
      )}
    </div>
  );
};

export default Accordion;
