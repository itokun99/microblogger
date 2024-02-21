import { usePosts } from "./hooks/usePosts";

function App() {
  const postQuery = usePosts();

  return (
    <div>
      <ul>
        <p>{JSON.stringify(postQuery.data)}</p>
      </ul>
    </div>
  );
}

export default App;
