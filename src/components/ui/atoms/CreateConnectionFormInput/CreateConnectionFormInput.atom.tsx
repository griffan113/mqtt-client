import React from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  useColorMode,
} from '@chakra-ui/react';
import { UseFormRegister } from 'react-hook-form';

interface CreateConnectionFormInputProps extends ChakraInputProps {
  name: string;
  register: UseFormRegister<any>;
  label?: string;
  error?: string;
}

export const CreateConnectionFormInput: React.FC<CreateConnectionFormInputProps> = ({ name, label, error, register, ...rest }) => {
  const { colorMode } = useColorMode();

  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        {...register(name)}
        name={name}
        id={name}
        bgColor={colorMode === 'dark' ? 'gray.900' : 'gray.100'}
        variant="filled"
        _placeholder={{
          color: colorMode === 'dark' ? 'gray.500' : 'gray.500',
        }}
        _focus={{
          borderColor: 'border_primary',
        }}
        size="lg"
        {...rest}
      />
      {!!error && (
        <FormErrorMessage fontWeight="medium" mb="4">
          {error}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

CreateConnectionFormInput.defaultProps = {
  error: undefined,
  label: undefined,
};
