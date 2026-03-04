"use client"

import { type Dispatch, type SetStateAction, useState } from "react"

interface ShowMoreProps<T> {
  data: T[]
  setData: Dispatch<SetStateAction<T[]>>
}

function ShowMore<T>({ data, setData }: ShowMoreProps<T>) {
  const [showMore, setShowMore] = useState<boolean>(true);

  const showMoreHandler = () => {
    if (showMore) {
      setShowMore(false);
      return setData(data);
    }
    setShowMore(true);
    return setData([data[0]]);
  };

  return (
    <div className="text-center">
      <button type="button" onClick={showMoreHandler}>
        {showMore ? "Näytä lisää" : "Näytä vähemmän"}
      </button>
    </div>

  );
}

export default ShowMore
