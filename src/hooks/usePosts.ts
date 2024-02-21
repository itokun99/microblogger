import { APP_CONFIG, BLOGGER_ENDPOINT } from "../configs/app";
import { useFetch } from "./useFetch";

export function usePosts() {
  const query = useFetch({
    queryFn: () =>
      fetch(BLOGGER_ENDPOINT.posts + `?key=${APP_CONFIG.key}`).then((res) =>
        res.json(),
      ),
  });

  const onLoadMore = () => query.fetching();

  return {
    ...query,
    onLoadMore,
  };
}
