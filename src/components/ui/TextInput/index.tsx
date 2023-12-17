import { Input } from '../../styled/Input/Input';
import styles from './styles.module.scss';
import { TextInputProps } from './types';

export function TextInput({
  placeholder,
  onChange,
  value,
  width,
  maxChars,
}: TextInputProps) {
  return (
    <Input
      $width={width}
      type='text'
      className={styles.textfield}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      maxLength={maxChars}
    />
  );
}
