import React from 'react';
import {
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInputStepper,
  useColorMode,
  NumberInput,
  NumberInputFieldProps as ChakraNumberInputProps,
  FormErrorMessage,
} from '@chakra-ui/react';
import { UseFormRegister } from 'react-hook-form';

interface CreateConnectionFormNumberInputProps extends ChakraNumberInputProps {
  name: string;
  label?: string;
  register: UseFormRegister<any>;
  error?: string;
}

export const CreateConnectionFormNumberInput: React.FC<CreateConnectionFormNumberInputProps> = ({
  name,
  label,
  register,
  error,
  ...rest
}) => {
  const { colorMode } = useColorMode();

  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <NumberInput size="lg" mb="3" min={0} variant="filled">
        <NumberInputField
          {...register(name)}
          name={name}
          id={name}
          bgColor={colorMode === 'dark' ? 'gray.900' : 'gray.100'}
          _placeholder={{
            color: colorMode === 'dark' ? 'gray.500' : 'gray.500',
          }}
          _focus={{
            borderColor: 'border_primary',
          }}
          {...rest}
        />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      {!!error && (
        <FormErrorMessage fontWeight="medium" mb="4">
          {error}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

CreateConnectionFormNumberInput.defaultProps = {
  label: undefined,
};
