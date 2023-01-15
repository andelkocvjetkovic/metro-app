import Checkbox from '../Checkbox';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const onChange = jest.fn();

beforeEach(() => {
  onChange.mockReset();
});

describe('<Checkbox />', () => {
  it('should render without errors', () => {
    render(<Checkbox isChecked={false} onChange={onChange} id='checkbox' />);
  });
  it('should have correct id and linked it with label', () => {
    const { getByLabelText } = render(
      <Checkbox isChecked={false} onChange={onChange} id='checkbox'>
        Checkbox
      </Checkbox>
    );
    getByLabelText(/checkbox/i);
  });
  it('should call onChange', async () => {
    const user = userEvent.setup();

    const { getByLabelText } = render(
      <Checkbox isChecked={false} onChange={onChange} id='checkbox'>
        Checkbox
      </Checkbox>
    );
    await user.click(getByLabelText(/checkbox/i));
    expect(onChange).toBeCalledTimes(1);
  });
});
