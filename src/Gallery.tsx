import { ReactComponentElement, useEffect, useState } from "react";
import { config } from "./config";
import useGetInfo from "../hooks/useGetInfo";

const url = [config.url, "api/files"].filter(Boolean).join("/");
const opts = {
  projectId: config.projectId,
  page: 1,
  limit: 10,
};

const Gallery: ReactComponentElement = () => {
  const [data, setData] = useState<ResponseData>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url + "?" + new URLSearchParams(opts));
        const json = await response.json();
        setData(json);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      {!data ? (
        <p>Nothing exists</p>
      ) : (
        data.items.map((item, _) => {
          return (
            <img
              id={item.id}
              src={`${config.url}${item.filepath}`}
              width="150px"
            />
          );
        })
      )}
    </>
  );
};

export default Gallery;
