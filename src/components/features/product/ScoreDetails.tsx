import { Flex, Text, Image } from '@chakra-ui/react';

function ScoreDetails() {
  return (
    <div>
      <Flex align={'center'} borderRadius="6px">
        <Image
          src="/assets/logo.png"
          alt="Logo Image"
          height={20}
          width={20}
          marginTop={10}
          marginRight={8}
          marginBottom={4}
          borderRadius="6px"
        />
        <Text color={'green.200'} fontSize={30}>
          4.5
        </Text>
      </Flex>
      <Flex>
        <Text marginRight={4} fontWeight={800}>
          Environment Friendliness:
        </Text>
        <Text> 4.8</Text>
      </Flex>
      <Flex>
        <Text marginRight={4} fontWeight={800}>
          Packaging:
        </Text>
        <Text> 4.0</Text>
      </Flex>
    </div>
  );
}

export default ScoreDetails;
