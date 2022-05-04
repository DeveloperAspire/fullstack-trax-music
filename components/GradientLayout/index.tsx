import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

interface LayoutProps {
  color: string;
  children: React.ReactNode;
  image: typeof Image;
  subtitle: string;
  title: string;
  description: string;
  roundedImage: boolean;
}

// : React.FC<LayoutProps>

const GradientLayout = ({
  color,
  children,
  image,
  subtitle,
  title,
  description,
  roundedImage,
}) => {
  return (
    <Box
      height="calc(100vh - 100px)"
      overflowY="auto"
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}
    >
      <Flex bg={`${color}.600`} padding="40px" align="end">
        <Box padding="20px">
          <Image
            boxSize="160px"
            src={image}
            boxShadow="2xl"
            borderRadius={roundedImage ? "100%" : "3px"}
          />
        </Box>
        <Box padding="20px" lineHeight="40px" color="white">
          <Text fontSize="x-small" fontWeight="bold" casing="uppercase">
            {subtitle}
          </Text>
          <Text fontSize="6xl">{title}</Text>
          <Text fontSize="x-small">{description}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default GradientLayout;
