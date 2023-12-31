import styled from 'styled-components';
import theme from '../../theme';
import { FONT_SIZE, RESPONSIVE_SIZE } from '../../constants/size';
import { FONT } from '../../constants/font';

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
`;

const PartBox = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  padding: 10px;
  width: 50%;
  height: 300px;

  @media ${theme.WINDOW_SIZE.TABLET} {
    width: 60%;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 95%;
  }
`;

const CategoryBox = styled.button`
  ${theme.ALIGN.ROW_CENTER};
  white-space: nowrap;
`;

const PartNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  margin-bottom: 10px;

  button {
    color: ${props =>
      props.darkMode ? theme.COLOR.LIGHT.WHITE : theme.COLOR.DARK.BLACK};
    font-family: ${FONT.IBM_PLEX_SANS_KR.SEMI_BOLD};
    font-size: ${FONT_SIZE.XL};
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
      color: ${theme.COLOR.LIGHT.YELLOW};
      transform: scale(1.1);
    }

    &.selected {
      color: ${theme.COLOR.LIGHT.YELLOW};
    }
  }
`;

const PartContents = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};

  background-color: ${props =>
    props.darkMode ? theme.COLOR.DARK.NAVY : theme.COLOR.LIGHT.WHITE_GRAY};
  color: ${props =>
    props.darkMode ? theme.COLOR.LIGHT.WHITE : theme.COLOR.DARK.BLACK};
  padding: 50px;

  width: 100%;
  height: 100%;
  min-width: 800px;
  border-radius: 30px;

  @media ${theme.WINDOW_SIZE.TABLET} {
    min-width: 600px;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    min-width: 300px;
  }

  p {
    margin: auto;
    font-size: ${FONT_SIZE.L};
  }
`;
export { Container, CategoryBox, PartBox, PartNav, PartContents };
