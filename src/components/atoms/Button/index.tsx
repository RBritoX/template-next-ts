import React, { ButtonHTMLAttributes } from 'react';
import { StyledIconProps } from '@styled-icons/styled-icon';

import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<StyledIconProps>;
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ icon: Icon, label, ...rest }) => (
  <S.Container type="button" {...rest}>
      {Icon && <Icon size={16} />}
      {label}
  </S.Container>
);
