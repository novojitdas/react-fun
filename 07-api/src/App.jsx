import { useEffect, useState } from "react";
import { getPosts, randomUsers } from "./api";
import PostCard from "./components/PostCard";
import UserCard from "./components/UserCard";
function App() {
  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);

  useEffect(() => {
    randomUsers().then((user) => setUser(user.results[0]));
  }, []);

  const userRefresh = () => {
    randomUsers().then((user) => setUser(user.results[0]));
  };

  return (
    <div>
      {user && <UserCard data={user} />}
      <button className="rounded bg-slate-400 p-2" onClick={userRefresh}>
        User Refresh
      </button>
      {data ? (
        data.map((e) => <PostCard title={e.title} body={e.body} />)
      ) : (
        <p>No data</p>
      )}
    </div>
  );
}
export default App;
