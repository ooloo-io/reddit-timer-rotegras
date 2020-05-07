import styled from 'styled-components';
import PropTypes from 'prop-types';


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${(props) => {
    return props.children < 10
      ? props.theme.heatMapColors[`color${props.children}`]
      : props.theme.heatMapColors.color10;
  }};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.textsize.small};
  font-weight: 700;
  border: 1px solid transparent;
  border-color: ${(props) => {
    return props.isActive
      ? props.theme.colors.borderDark
      : props.theme.colors.transparent;
  }};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.borderDark};
    cursor: pointer;
  }
`;

Wrapper.propTypes = {
  isActive: PropTypes.bool.isRequired,
  children: PropTypes.number.isRequired,
};

export { Wrapper };
