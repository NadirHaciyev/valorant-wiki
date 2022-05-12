import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

import "./AgentCard.css";

import Detail from "./Detail";

import { useSelector, useDispatch } from "react-redux";
import { setId, setOpened } from "../../redux/detail/detailSlice";

function AgentCard({ agent }) {
  const dispatch = useDispatch();
  const { id, opened } = useSelector((state) => state.detail);

  const handleClick = () => {
    if (id == agent.uuid || id == null) {
      dispatch(setOpened());
    } else if (id != agent.uuid && !opened) {
      dispatch(setOpened());
    }
    dispatch(setId(agent.uuid));
  };
  return (
    <Flex flexDir="column" width={300} height={387}>
      <Flex w={300} flexDir="column" zIndex="1">
        <Flex
          w="100%"
          bg="#FF4B50"
          justifyContent="center"
          alignItems="center"
          p="12px"
          gap={2}
        >
          <Image
            w="24px"
            h="24px"
            loading="lazy"
            src={`${agent?.displayIcon}`}
          />
          <Heading as="h2" color="#F6F3F9" fontSize="18px" fontWeight="bold">
            {agent.displayName}
          </Heading>
        </Flex>
        <Box bg="#081017" height="300px">
          <Image height="100%" loading="lazy" src={`${agent?.bustPortrait}`} />
        </Box>
        <Flex
          w="100%"
          bg="#FF4B50"
          justifyContent="center"
          alignItems="center"
          p="6px"
          gap={2}
          onClick={handleClick}
        >
          <Text color="#F6F3F9" fontSize="18px" fontWeight="bold">
            Details
          </Text>
          <AiFillCaretDown color="#fff" />
        </Flex>
      </Flex>
      <Detail agent={agent} />
    </Flex>
  );
}

export default React.memo(AgentCard);
