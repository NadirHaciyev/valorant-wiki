import MenuCard from "../../Components/MenuCard";
import { data } from "../../Data";
import { Box, Grid, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Box w="100%" h="100%" bg="#ffeef2">
      <Box w="90%" mx="auto" py={10}>
        <Heading
          as="h2"
          fontSize={32}
          fontWeight={700}
          textTransform="uppercase"
          pos="relative"
          textAlign="center"
          _before={{
            content: '""',
            width: 100,
            height: "3px",
            bg: "#0a141e",
            pos: "absolute",
            bottom: "-10px",
            left: "50%",
            transform: "translateX(-50%)"
          }}
          mb={10}
        >
          Features
        </Heading>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap="50px 0"
          justifyItems="center"
        >
          {data.map((item, index) => (
            <Link to={`/${item.route}`}>
              <MenuCard
                key={index}
                name={item.name}
                title={item.title}
                description={item.description}
              />
            </Link>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;
