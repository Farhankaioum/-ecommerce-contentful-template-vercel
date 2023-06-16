import { useState } from 'react';
import { Box, Flex, Text, Image, Center } from '@chakra-ui/react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function ScorePopup() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Button onClick={openPopup}>
        <Flex justifyContent="space-between" align={'center'}>
          <Image
            src="/assets/logo.png"
            alt="Logo Image"
            height={10}
            width={10}
            borderRadius="6px"
            marginRight={4}
          />
          <Box display="grid" gridTemplateColumns="auto auto">
            <Box>4.5</Box>
            <Box width={5} marginLeft={2}>
              <FontAwesomeIcon color="gold" icon={faStar} />
            </Box>
          </Box>
        </Flex>
      </Button>

      <Modal isOpen={isOpen} onClose={closePopup}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex align={'center'} bg={'grey'} marginTop={6} borderRadius="6px">
              <Image
                src="/assets/logo.png"
                alt="Logo Image"
                height={20}
                width={20}
                margin={5}
                marginRight={10}
                borderRadius="6px"
              />
              <Text color={'green.200'} fontSize={30}>
                4.5
              </Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closePopup}>
              Ok
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ScorePopup;
