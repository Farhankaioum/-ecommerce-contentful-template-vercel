import { useState, useEffect } from 'react';
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

import { SustainableProductModel } from '../models/SustainableProductModel';

function ScorePopup(shenviRef) {
  console.log('shenviRef ', shenviRef);
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  function convertScore(score) {
    const minScore = 0;
    const maxScore = 1;
    const minConverted = 1;
    const maxConverted = 5;

    // Calculate the converted score
    const convertedScore =
      ((score - minScore) / (maxScore - minScore)) * (maxConverted - minConverted) + minConverted;

    // Round the converted score to the nearest integer
    const roundedScore = Math.round(convertedScore);

    return roundedScore;
  }

  // pages/index.tsx
  const [data, setData] = useState<SustainableProductModel | null>(null);
  useEffect(() => {
    const fetchUser = async () => {
      const baseUrl = 'https://shenvi.xyz/api/score/getbyid/';
      const url = `${baseUrl}${shenviRef}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      {data ? (
        <Button onClick={openPopup} paddingLeft={0} paddingRight={2}>
          <Flex justifyContent="space-between" align={'center'} padding={0}>
            <Image
              src="/assets/logo.png"
              alt="Logo Image"
              height={10}
              width={10}
              borderRadius="6px"
              marginRight={4}
            />
            <Box display="grid" gridTemplateColumns="auto auto">
              <Box>{convertScore(parseFloat(data.sustainabilityMetrics.score))}</Box>
              <Box width={5} marginLeft={2}>
                <FontAwesomeIcon color="gold" icon={faStar} />
              </Box>
            </Box>
          </Flex>
        </Button>
      ) : (
        <div> </div>
      )}

      {data && (
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
                  {convertScore(parseFloat(data.sustainabilityMetrics.score))}
                </Text>
              </Flex>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex>
                <Text marginRight={4} fontWeight={800}>
                  Environment Friendliness:
                </Text>
                <Text> {Math.floor(parseFloat(data.sustainabilityMetrics.totalCarbon))}</Text>
              </Flex>
              <Flex>
                <Text marginRight={4} fontWeight={800}>
                  Packaging:
                </Text>
                <Text> {convertScore(parseFloat(data.sustainabilityMetrics.packagingScore))}</Text>
              </Flex>
              <Flex>
                <Text marginRight={4} fontWeight={800}>
                  Carbon Emmision:
                </Text>
                <Text> {Math.floor(parseFloat(data.sustainabilityMetrics.totalCarbon))}</Text>
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={closePopup}>
                Ok
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
}

export default ScorePopup;
