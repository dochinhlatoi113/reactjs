import React, { useEffect, useState } from "react";

function useCheck(url) {
  const [dataCustom, setdataCustom] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      function checkData() {
        fetch(url)
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("NETWORK RESPONSE ERROR");
            }
          })
          .then((data) => {
            setdataCustom(data);
            setError(false);
            setLoading(true);
          })
          .catch((error) => console.error("FETCH ERROR(lỗi rồi):", error));
      }
      checkData();
    } catch (error) {
      setdataCustom([]);
      setError(true);
      setLoading(false);
    }
  }, []);

  return { dataCustom, loading, error };
}
export default useCheck;
