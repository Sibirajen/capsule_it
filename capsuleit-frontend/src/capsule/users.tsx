import { useEffect, useState } from "react";

export default function Users() {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUsers() {
      try {
        setState({ data: null, loading: true, error: null });

        const response = await fetch("/api/users", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }

        const data = await response.json();

        setState({
          data,
          loading: false,
          error: null,
        });
      } catch (error) {
        // Don't show an error when the component was unmounted
        if (error.name === "AbortError") return;

        setState({
          data: null,
          loading: false,
          error: "Unable to load users. Please try again.",
        });
      }
    }

    fetchUsers();

    return () => controller.abort();
  }, []);

  if (state.loading) {
    return <p>Loading users...</p>;
  }

  if (state.error) {
    return (
      <div role="alert">
        <p>{state.error}</p>
        <button onClick={() => window.location.reload()}>
          Try again
        </button>
      </div>
    );
  }

  if (!state.data?.length) {
    return <p>No users found.</p>;
  }

  return (
    <ul>
      {state.data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
