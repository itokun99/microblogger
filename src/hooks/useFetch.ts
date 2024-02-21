import { useCallback, useEffect, useState } from "react";

interface UseFetchOptions {
  queryFn: () => Promise<void>;
}

export function useFetch<T = unknown>({ queryFn }: UseFetchOptions) {
  const [isLoading, setLoading] = useState(true);
  const [isFetching, setFetching] = useState(false);
  const [isError, setError] = useState(false);
  const [res, setRes] = useState<T>();

  const fetching = useCallback(() => {
    if (queryFn && typeof queryFn === "function" && !res) {
      setLoading(true);
      setFetching(true);
      queryFn()
        .then((res) => {
          setLoading(false);
          setFetching(false);
          setError(false);
          setRes(res as T);
        })
        .catch((err) => {
          console.log("Error queryfunc ===>", err);
          setError(true);
          setLoading(false);
          setFetching(false);
        });
    }
  }, [queryFn, res]);
  useEffect(() => {
    fetching();
  }, [fetching]);

  return {
    isLoading,
    isFetching,
    isError,
    fetching,
    data: res,
  };
}
