import styled from 'styled-components';
import { FONT_SIZE, RESPONSIVE_SIZE } from '../../../constants/size';
import theme from '../../../theme';

const CardWrapper = styled.div`
  border: 1px solid #fff;
  background: ${props =>
    props.darkMode ? theme.COLOR.DARK.BLACK : theme.COLOR.LIGHT.WHITE_GRAY};
  border-radius: 8px;
  overflow: hidden;

  height: 500px;
  color: ${props =>
    props.darkMode ? theme.COLOR.LIGHT.WHITE : theme.COLOR.DARK.BLACK};
  cursor: pointer;
`;

const CardTop = styled.div`
  height: 250px;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    background: black;
  }
`;
const CardBottom = styled.div`
  margin: 0px 20px;
  height: 100%;

  h3 {
    font-size: ${FONT_SIZE.SM};
    margin-bottom: 10px;
  }
`;

const CardCategory = styled.div`
  height: 100px;
  position: relative;

  &::before {
    position: absolute;
    content: '';
    background: rgb(255, 61, 61);
    top: -20px;
    left: 0;
    right: 0;
    height: 2px;
  }
`;

const Wrapper = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  gap: 7px;

  span {
    font-size: ${FONT_SIZE.SM};
  }
`;

const MemberWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const Member = styled.div`
  color: ${props =>
    props.darkMode ? theme.COLOR.LIGHT.WHITE : theme.COLOR.DARK.BLACK};
  font-size: ${FONT_SIZE.XS};
  border-radius: 5px;
  border: 1px solid ${theme.COLOR.LIGHT.YELLOW};
  margin-bottom: 2px;
  @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
    // 모바일 사이즈일 때 깨짐
  }
`;

export {
  CardWrapper,
  CardTop,
  CardBottom,
  CardCategory,
  Wrapper,
  MemberWrapper,
  Member
};
