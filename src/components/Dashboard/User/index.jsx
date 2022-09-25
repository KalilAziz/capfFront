import * as Styled from './styles';
/* eslint-disable */
import { AiOutlineArrowDown } from 'react-icons/ai';
import { useState } from 'react';
export const User = ({ user }) => {
  const [visible, setVisible] = useState(false);
  console.log(visible);
  return (
    <Styled.Container onClick={() => setVisible(!visible)}>
      <span>
        {user.Name} - {user.Type}
        <AiOutlineArrowDown />
      </span>

      <Styled.Info visible={visible}>...................</Styled.Info>
    </Styled.Container>
  );
};
