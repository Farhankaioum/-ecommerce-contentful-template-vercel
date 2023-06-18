import { Flex, Text, Image } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

import { SustainableProductModel } from '../models/SustainableProductModel'

function ScoreDetails() {

  function convertScore(score) {
    const minScore = 0;
    const maxScore = 1;
    const minConverted = 1;
    const maxConverted = 5;
  
    // Calculate the converted score
    const convertedScore = ((score - minScore) / (maxScore - minScore)) * (maxConverted - minConverted) + minConverted;
  
    // Round the converted score to the nearest integer
    const roundedScore = Math.round(convertedScore);
  
    return roundedScore;
  }

  // pages/index.tsx
  const [data, setData] = useState<SustainableProductModel | null>(null);
useEffect(() => {
  const fetchUser = async () => {
    try {
      const response = await fetch('https://shenvi.xyz/api/score/getbyid/648eb05c74140dff1cc2227c');
      var data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  fetchUser();
}, []);

  return (
    <div>
       {data && <div> 
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
            {convertScore(parseFloat(data.sustainabilityMetrics.score))}
            </Text>
          </Flex>
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
        </div>}
    </div>
  );
}

export default ScoreDetails;
