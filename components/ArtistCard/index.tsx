import { Flex, Text, Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

const ArtistCard = ({ name }) => {
  return (
    <Box paddingX="10px" width="20%">
      <Box bg="gray.900" borderRadius="4px" padding="15px" width="100%">
        <Image
          src="https://placekitten.com/200/300"
          width="100%"
          borderRadius="100%"
          height="250px"
          marginX="auto"
        />
        <Box marginTop="20px">
          <Text fontSize="large">{name}</Text>
          <Text fontSize="x-small">Artist</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ArtistCard;
