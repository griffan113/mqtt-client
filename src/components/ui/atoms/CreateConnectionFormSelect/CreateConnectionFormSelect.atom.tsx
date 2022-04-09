import React from 'react';
import { FormControl, FormLabel, Select as ChakraSelect, SelectProps as ChakraSelectProps, useColorMode } from '@chakra-ui/react';
import { UseFormRegister } from 'react-hook-form';

interface CreateConnectionFormSelectProps extends ChakraSelectProps {
  name: string;
  label?: string;
  register: UseFormRegister<any>;
}

export const CreateConnectionFormSelect: React.FC<CreateConnectionFormSelectProps> = ({ name, label, register, ...rest }) => {
  const { colorMode } = useColorMode();

  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraSelect
        {...register(name, { required: rest.isRequired })}
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
      >
        <option value="SUBSCRIPTION">Subscribe</option>
        <option value="PUBLICATION">Publish</option>
        <option value="BOTH">Subscribe and Publish</option>
      </ChakraSelect>
    </FormControl>
  );
};

CreateConnectionFormSelect.defaultProps = {
  label: undefined,
};
