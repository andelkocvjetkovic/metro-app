import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RadioButton from '@app/components/radio-button/RadioButton';

const onChange = jest.fn();

beforeEach(() => {
  onChange.mockReset();
});

describe('<RadioButton />', () => {
  it('should render without errors', () => {
    render(
      <RadioButton id='radio-button' onChange={onChange} isChecked={false} value='radio-button'>
        Radio button
      </RadioButton>
    );
  });
  it('should be linked with label', () => {
    const { getByLabelText } = render(
      <RadioButton id='radio-button' onChange={onChange} isChecked={false} value='radio-button'>
        Radio button
      </RadioButton>
    );
    getByLabelText('Radio button');
  });
  it('should call onChange', async () => {
    const user = userEvent.setup();
    const { getByLabelText } = render(
      <RadioButton id='radio-button' onChange={onChange} isChecked={false} value='radio-button'>
        Radio button
      </RadioButton>
    );

    await user.click(getByLabelText('Radio button'));
    expect(onChange).toBeCalledTimes(1);
  });
});
