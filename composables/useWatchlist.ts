export const useWatchlist = () => {
  const base = useRuntimeConfig().public.API_BASE_URL;

  const getWatchlist = async (userId) => {
    const { data } = await useFetch(`${base}/watchlist/${userId}`);
    return data.value;
  };

  const addToWatchlist = async ({ userId, movieId }) => {
    const { data } = await useFetch(`${base}/watchlist`, {
      method: 'POST',
      body: { userId, movieId },
    });
    return data.value;
  };

  const removeFromWatchlist = async ({ userId, movieId }) => {
    const { data } = await useFetch(`${base}/watchlist`, {
      method: 'DELETE',
      body: { userId, movieId },
    });
    return data.value;
  };

  return {
    getWatchlist,
    addToWatchlist,
    removeFromWatchlist,
  };
};
