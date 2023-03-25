import { Heading, Image, Text } from '@chakra-ui/react';
import logo from '../assets/light-bulb.svg';

const Header = () => {
  return (
    <>
      <Image src={logo} alt="logo" width={100} marginBottom="1rem" />
      <Heading
        fontSize={['sm', 'md', 'lg', 'xl']}
        maxWidth={{ base: '100%' }}
        color="brand.blue"
        marginBottom="1rem"
      >
        AI Keyword Extractor
      </Heading>
      <Text
        fontSize={['sm', 'md', 'lg', 'xl']}
        color="brand.blue"
        textAlign="center"
      >
        Paste in your text below and we'll Generate keywords for you
      </Text>
    </>
  );
};

export default Header;
