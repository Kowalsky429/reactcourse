import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { StyledAverage } from 'components/molecules/UsersListItem/UsersListItem.styles';
import ReactModal from 'react-modal';

export const ModalWrapper = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 480px;
  min-height: 600px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  box-shadow: 0px -5px 25px -10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  ${Button} {
    padding: 10px 68px;
  }
  ${StyledAverage} {
    position: absolute;
    top: 45px;
    left: 50px;
    transform: scale(1.5);
  }
  &:focus {
    outline: none;
  }
`;
