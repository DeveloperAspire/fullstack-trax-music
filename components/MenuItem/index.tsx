import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import { IconType } from "react-icons/lib";
import NextLink from "next/link";

interface navProps {
  navMenu: {
    name: string;
    icon: IconType;
    route: string;
  }[];
  
}
const MenuItem: React.FC<navProps> = ({ navMenu}) => {
     
  return (
    <Box marginBottom="20px">
      <List spacing={2}>
        {navMenu.map((menu) => (
          <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
            <LinkBox>
              <NextLink href={menu.route} passHref>
                <LinkOverlay>
                  <ListIcon as={menu.icon} color="white" marginRight="20px" />
                  {menu.name}
                </LinkOverlay>
              </NextLink>
            </LinkBox>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MenuItem;
