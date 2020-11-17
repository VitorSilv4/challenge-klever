import React, { useRef, useCallback } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import Button from '../Button';
import { IProduct } from '../../store/modules/stock/types';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingProduct: IProduct;
  handleSubmit: any;
}

const ModalEditProduct: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  editingProduct,
  handleSubmit,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmitRequest = useCallback(
    async (data: IProduct) => {
      handleSubmit({ ...data, id: editingProduct.id });
      setIsOpen();
    },
    [handleSubmit, setIsOpen, editingProduct.id],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmitRequest} initialData={editingProduct}>
        <h1>Edit Product</h1>
        <Input name="name" placeholder="Product Name" />

        <Input
          name="price"
          type="number"
          step=".01"
          placeholder="Price"
        />
        <Input name="quantity" type="number" placeholder="Quantity" />

        <Button type="submit" data-testid="edit-product-button">
          Edit Product
        </Button>
      </Form>
    </Modal>
  );
};

export default ModalEditProduct;
