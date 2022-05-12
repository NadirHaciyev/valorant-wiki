import axios from "axios";

export const fetchAgents = async () => {
  const { data } = await axios.get("https://valorant-api.com/v1/agents");

  return data;
};
