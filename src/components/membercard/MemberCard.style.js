import styled from 'styled-components';
import theme from '../../theme';
import { FONT_SIZE, FONT_WEIGHT } from '../../constants/size';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  ${theme.ALIGN.COLUMN_CENTER}
  padding: ${props => props.padding};
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props =>
    props.darkMode ? theme.COLOR.LIGHT.WHITE : theme.COLOR.LIGHT.WHITE_GRAY};
  border-radius: 20px;
  font-weight: ${props => props.fontweight};
  cursor: pointer;

  div {
    margin-top: 5px;
    ${theme.ALIGN.ROW_CENTER}
  }
  img {
    object-fit: cover;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: ${props => props.imgwidth};
  height: ${props => props.imgheight};

  img {
    width: 100%;
    height: 100%;
    border-radius: 2rem;
  }

  span {
    position: absolute;
    left: 1px;
    top: 5px;
    padding: 8px;
    background-color: #e5e5e5;
    width: auto;
    border-radius: 0.5rem;
    font-size: ${FONT_SIZE.SM};
    font-weight: ${FONT_WEIGHT.BOLD};
  }
`;

const NameText = styled.p`
  margin-top: 10px;
  font-size: ${props => props.namefontsize};
  font-weight: ${props => props.namefontweight};
`;

const GenerationText = styled.p`
  font-size: ${props => props.generationfontsize};
`;

const IntroText = styled.p`
  font-size: ${props => props.introfontsize};
`;

const TextContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export {
  Container,
  ImageWrapper,
  NameText,
  GenerationText,
  IntroText,
  TextContainer
};
