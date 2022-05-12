import { Table, Tbody, Tr, Td, TableContainer, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";

function Detail({ agent }) {
  const { id, opened } = useSelector((state) => state.detail);

  return (
    <Flex
      w={300}
      flexDir="column"
      transform="scaleY(0)"
      transformOrigin="top"
      zIndex={10}
      className={agent.uuid == id && opened ? "detailOpened" : ""}
      transition="all .3s"
    >
      <TableContainer height="100%">
        <Table variant="simple" height="100%">
          <Tbody height="100%">
            <Tr>
              <Td w="30%" bg="#141e29" color="#F6F3F9" borderColor="#081017">
                Name
              </Td>
              <Td borderColor="#081017" color="#adb7c3" bg="#081017">
                {agent.displayName}
              </Td>
            </Tr>
            <Tr>
              <Td w="30%" bg="#141e29" color="#F6F3F9" borderColor="#081017">
                role
              </Td>
              <Td borderColor="#081017" color="#adb7c3" bg="#081017">
                {agent?.role?.displayName ?? 'Not found'}
              </Td>
            </Tr>
            <Tr>
              <Td w="30%" bg="#141e29" color="#F6F3F9" borderColor="#081017">
              {agent?.abilities[0]?.slot}
              </Td>
              <Td borderColor="#081017" color="#adb7c3" bg="#081017">
                {agent?.abilities[0]?.displayName}
              </Td>
            </Tr>
            <Tr>
              <Td w="30%" bg="#141e29" color="#F6F3F9" borderColor="#081017">
              {agent?.abilities[1]?.slot}
              </Td>
              <Td borderColor="#081017" color="#adb7c3" bg="#081017">
              {agent?.abilities[1]?.displayName}
              </Td>
            </Tr>
            <Tr>
              <Td w="30%" bg="#141e29" color="#F6F3F9" borderColor="#081017">
              {agent?.abilities[2]?.slot}
              </Td>
              <Td borderColor="#081017" color="#adb7c3" bg="#081017">
              {agent?.abilities[2]?.displayName}
              </Td>
            </Tr>
            <Tr>
              <Td w="30%" bg="#141e29" color="#F6F3F9" borderColor="#081017">
              {agent?.abilities[3]?.slot}
              </Td>
              <Td borderColor="#081017" color="#adb7c3" bg="#081017">
              {agent?.abilities[3]?.displayName}
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
}

export default Detail;
