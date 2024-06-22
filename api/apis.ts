export const fetchChannel = async () => {
  return await useFetch(`/api/channel`);
};

export const fetchVideList = async () => {
  return await useFetch(`/api/video`);
};

export const fetchVideoDetail = async (id: string) => {
  return await useFetch(`/api/video/${id}`);
};
