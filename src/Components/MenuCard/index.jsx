import { Box, Flex, Text, Heading, background } from "@chakra-ui/react";

import { useEffect } from "react";
import { fetchPokemon } from "../../Middleware/Api";

import { Icon } from "../../Services/Utils/Icons";

import "./MenuCard.css";

function MenuCard({ name, title, description }) {
  useEffect(() => {}, []);

  return (
    <Flex
      className="menu-card"
      gap='12px'
      w={350}
      h={245}
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      bg="#fff"
      _hover={{ boxShadow: "0 0 25px 0 #0000001a" }}
    >
      <Icon name={name} />
      <Heading fontSize={22} fontWeight={600}>
        {title}
      </Heading>
      <Text fontSize={14}>{description}</Text>
    </Flex>
  );
}

export default MenuCard;
