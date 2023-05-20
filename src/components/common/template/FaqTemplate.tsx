import React from 'react';
import styled from '@emotion/styled';
import Button from '../../Home/atom/button';
import FaqSection from '../organism/FaqSection';
import ImageSection from '../../Home/molecule/ImageSection';

const FaqTemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface FaqTemplateProps {
  data: Array<{
    index: number;
    title: string;
    content: string;
  }>;
}

function FaqTemplate({ data }: FaqTemplateProps) {
  return (
    <FaqTemplateContainer>
      <ImageSection />
      <Button />
      <FaqSection data={data} />
    </FaqTemplateContainer>
  );
}

export default FaqTemplate;
