import React from 'react';
import { Button, HStack, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react';
import { VscCircuitBoard } from 'react-icons/vsc';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { CreateConnectionFormInput, CreateConnectionFormNumberInput } from '@/components/ui/atoms';
import { CreateConnectionFormData } from './CreateConnectionFormData';

const createConnectionFormSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  uri: Yup.string().url('URI must be a valid URL').required('URI is required'),
  port: Yup.number()
    .transform(value => (isNaN(value) ? undefined : value))
    .positive()
    .required('Port is required'),
  username: Yup.string().optional(),
  password: Yup.string().optional(),
});

type CreateConnectionModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const CreateConnectionModal: React.FC<CreateConnectionModalProps> = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateConnectionFormData>({ resolver: yupResolver(createConnectionFormSchema) });

  const onSubmit: SubmitHandler<CreateConnectionFormData> = data => console.log(data);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent mx="1" as="form" onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader borderRadius="md" color="gray.300" bg="gray.800">
          <HStack borderRadius="md" p="2" bg="gray.800">
            <Text fontSize="2rem" color="gray.300">
              <VscCircuitBoard />
            </Text>
            <Text color="gray.300">Create Connection</Text>
          </HStack>
        </ModalHeader>
        <ModalBody pb={6}>
          <CreateConnectionFormInput
            register={register}
            name="title"
            label="Title"
            error={errors.title?.message}
            placeholder="My Connection..."
            mb="3"
          />
          <CreateConnectionFormInput
            register={register}
            name="uri"
            label="URI"
            error={errors.uri?.message}
            placeholder="mqtt://test.mosquitto.org"
            mb="3"
          />
          <CreateConnectionFormNumberInput register={register} name="port" error={errors.port?.message} label="Port" placeholder="1883" />
          <CreateConnectionFormInput
            register={register}
            name="username"
            label="Username"
            error={errors.username?.message}
            placeholder="admin"
            mb="3"
          />
          <CreateConnectionFormInput
            register={register}
            name="password"
            label="Password"
            error={errors.password?.message}
            placeholder="****"
            type="password"
          />
        </ModalBody>

        <ModalFooter>
          <Button
            type="submit"
            bg="button_primary"
            _hover={{
              bg: 'button_primary_hover',
            }}
            mr={3}
            _active={{
              bg: 'button_primary_hover',
            }}
            isLoading={isSubmitting}
          >
            Save
          </Button>
          <Button
            onClick={() => {
              onClose();
              reset();
            }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
