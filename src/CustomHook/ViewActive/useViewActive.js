import { useEffect, useState } from "react";

const useViewActive = () => {
  const [girdViewActive, setGridViewActive] = useState(true);
  const [listViewActive, setListViewActive] = useState(false);
  useEffect(() => {
    const gridView = document.querySelector(".gridView");
    const listView = document.querySelector(".listView");

    gridView?.addEventListener("click", () => {
      setListViewActive(false);
      setGridViewActive(true);
    });
    listView?.addEventListener("click", () => {
      setGridViewActive(false);
      setListViewActive(true);
    });
  }, [girdViewActive, listViewActive]);
  return { girdViewActive, listViewActive };
};

export default useViewActive;
