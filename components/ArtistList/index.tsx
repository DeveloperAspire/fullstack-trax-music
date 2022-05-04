import { Flex, Text, Box } from "@chakra-ui/layout";
import ArtistCard from "../ArtistCard";

const ArtistList = ({ artists }) => {
  return (
    <Box color="white" paddingX="40px">
      <Box marginBottom="40px">
        <Text fontSize="2xl" fontWeight="bold">
          Top artist this month
        </Text>
        <Text fontSize="md">Only visible to you</Text>
      </Box>
      <Flex>
        {artists.map((artist) => (
          <ArtistCard name={artist.name} />
        ))}
      </Flex>
    </Box>
  );
};

export default ArtistList;
