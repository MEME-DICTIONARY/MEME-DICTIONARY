import styled from 'styled-components';

function RadioInputForm({ inputList }) {
  return (
    <StWrapper>
      {inputList.map((item, idx) => (
        <div key={idx}>
          <input type="radio" name={item.name} value={item.value} onClick={item.onClick} />
          <label htmlFor={item.name}>{item.value}</label>
        </div>
      ))}
    </StWrapper>
  );
}
const StWrapper = styled.ul`
  display: flex;
  gap: 10px;
`;

export default RadioInputForm;
