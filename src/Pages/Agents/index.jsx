import AgentCard from "../../Components/AgentCard";
import { fetchAgents } from "../../redux/agents/agentsSlice";

import { useEffect, useState } from "react";

import { Grid, Heading, Input, Flex, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredAgents } from "../../redux/agents/agentsSlice";

function Agents() {
  const dispatch = useDispatch();
  const { filteredAgents, status, error } = useSelector(
    (state) => state.agents
  );

  useEffect(() => {
    dispatch(fetchAgents());
  }, []);

  const handleFilter = (value) => {
    dispatch(setFilteredAgents(value));
  };

  if (status == "loading") {
    return <Heading textAlign="center">Loading...</Heading>;
  }

  if (status == "failed") {
    return <Heading textAlign="center">Error: {error.message}</Heading>;
  }

  return (
    <>
      <Flex justifyContent="center" m="10px" gap="10px">
        <Input
          colorScheme="red"
          w={300}
          borderColor="#333"
          bg="#fff"
          onChange={(e) => handleFilter(e.target.value)}
        />
        <Button colorScheme="green">Submit</Button>
      </Flex>
      <Grid
        templateColumns="repeat(4, max-content)"
        justifyContent="space-around"
        gap="40px 0"
      >
        {filteredAgents.map((agent) => (
          <AgentCard agent={agent} key={agent.uuid} />
        ))}
      </Grid>
    </>
  );
}

export default Agents;
