import styled from 'styled-components';
import theme from '../../theme';

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${theme.COLOR.DARK.GRAY};
`;

const Banner = styled.div`
  width: 100%;
  background-color: ${theme.COLOR.DARK.GRAY};
  img {
    object-fit: cover;
    height: 250px;
    width: 100%;
  }

  h1 {
    display: flex;
    margin-top: 30px;
    justify-content: center;
    color: ${theme.COLOR.LIGHT.WHITE};
    font-size: 50px;
    margin-bottom: 50px;
  }
`;

const Wrapper = styled.div`
  ${theme.ALIGN.ROW_CENTER}
  width: 100%;
  gap: 10px;
  height: 80%;
`;

const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  place-items: center;
`;
export { Banner, Container, Wrapper, ProjectWrapper };
