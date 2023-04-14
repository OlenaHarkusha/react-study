import styled from '@emotion/styled';

export const Card = styled.div`
  position: relative;
  border: 2px dashed black;
  padding: 8px;
  border-radius: 8px;
`;

export const CardName = styled.h2`
  margin-top: 0;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const CardInfo = styled.p`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 8px;
  color: rgb(56, 56, 56);
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;

  svg {
    display: block;
    margin-right: 8px;
    color: rgb(71, 71, 71);
  }
`;

const setBgColor = p => {
  switch (p.Cardtype) {
    case 'free':
      return 'background-color: green;';
    case 'paid':
      return 'background-color: blue;';
    case 'vip':
      return 'background-color: red;';
    default:
      return;
  }
};

export const Chip = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  background-color: #000;
  color: #fff;

  background-color: ${setBgColor};
`;
