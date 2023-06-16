import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import Link from 'next/link';

import { CtfImage } from '@src/components/features/contentful/ctf-image';
import { FormatCurrency } from '@src/components/shared/format-currency';
import { PageProductFieldsFragment } from '@src/lib/__generated/sdk';

import ScorePopup from './ScorePopup';

export const ProductTile = ({
  featuredProductImage,
  price,
  score,
  slug,
  sys: { id: entryId },
}: PageProductFieldsFragment) => {
  const inspectorProps = useContentfulInspectorMode({ entryId });
  return slug ? (
    <div {...inspectorProps({ fieldId: 'featuredProductImage' })}>
      <Box as={Link} href={slug}>
        {featuredProductImage && (
          <Box borderRadius={4} overflow="hidden">
            <CtfImage {...featuredProductImage} />
          </Box>
        )}
      </Box>
      <Flex justifyContent="space-between">
        {price && (
          <Text
            {...inspectorProps({ fieldId: 'price' })}
            mt={1}
            ml={10}
            fontWeight="500"
            fontSize="1.5rem"
            padding={3.5}
            borderRadius="6px"
          >
            <FormatCurrency value={price} />
          </Text>
        )}
        <Box marginRight={12} padding={1.5} borderRadius="6px">
          <Box marginTop={2}>
            <ScorePopup />
          </Box>
        </Box>
      </Flex>
    </div>
  ) : null;
};
