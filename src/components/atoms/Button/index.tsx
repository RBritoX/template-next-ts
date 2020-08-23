import React, { ButtonHTMLAttributes } from 'react';
import { StyledIconProps } from '@styled-icons/styled-icon';

import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<StyledIconProps>;
}

const Button: React.FC<ButtonProps> = ({ icon: Icon, children, ...rest }) => (
  <S.Container type="button" {...rest}>
      {Icon && <Icon size={16} />}
      {children}
  </S.Container>
);

export default Button;
