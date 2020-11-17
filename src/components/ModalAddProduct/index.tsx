import React, { useRef, useCallback } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import Button from '../Button';

interface ICreateProductData {
  name: string;
  price: string;
  quantity: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleSubmit: any;
}

const ModalAddProduct: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleSubmit,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmitRequest = useCallback(
    async (data: ICreateProductData) => {
      handleSubmit(data);
      setIsOpen();
    },
    [handleSubmit, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmitRequest}>
        <h1>New Product</h1>
        <Input name="name" placeholder="Product Name" />

        <Input
          name="price"
          type="number"
          step=".01"
          placeholder="Price"
        />
        
        <Input name="quantity" type="number" placeholder="Quantity" />

        <Button type="submit" data-testid="add-product-button">
          Add Product
        </Button>
      </Form>
    </Modal>
  );
};

export default ModalAddProduct;
