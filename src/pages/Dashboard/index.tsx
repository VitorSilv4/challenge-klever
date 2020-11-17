import React, { useState, useEffect, useCallback } from 'react';
import * as Yup from 'yup';
import { FiPlus, FiEdit, FiTrash } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../services/api';
import { addProductToStockRequest, removeProductFromStockRequest } from '../../store/modules/stock/actions';
import { IState } from '../../store';
import { IStockItem, IProduct } from '../../store/modules/stock/types';

import {
  Container,
  Header,
  HeaderContent,
  Content,
  Title,
  ProductList,
  ProductItem,
  ProductDetails,
  ProductButtons,
} from './styles';

import ModalAddProduct from '../../components/ModalAddProduct';
import ModalEditProduct from '../../components/ModalEditProduct';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const stock = useSelector<IState, IStockItem[]>(state => state.stock.items);

  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<IProduct>({} as IProduct);

  useEffect(() => {
    async function loadData(): Promise<void> {
      const response = await api.get('/products');
      response.data.map((product: IProduct) => dispatch(addProductToStockRequest(product)));
    }
    loadData();
  }, [dispatch]);

  const toggleModal = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [setModalOpen, modalOpen]);

  const toggleEditModal = useCallback(() => {
    setEditModalOpen(!editModalOpen);
  }, [setEditModalOpen, editModalOpen]);

  const handleSubmitAddProduct = useCallback(
    async (product: IProduct) => {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required(),
          price: Yup.string().required(),
          quantity: Yup.string().required(),
        });

        await schema.validate(product, { abortEarly: false });

        const { name, quantity, price } = product;

        const response = await api.post<IProduct>(
          '/products',
          {
            name,
            quantity: Number(quantity),
            price: Number(price),
          },
        );

        dispatch(addProductToStockRequest(response.data));
      } catch (err) {
        console.log(err);
      }
    },
    [dispatch],
  );

  const handleRemoveProduct = useCallback(
    (id: number) => {
      dispatch(removeProductFromStockRequest(id));
    },
    [dispatch],
  );

  const handleSubmitEditProduct = async (product: IProduct): Promise<void> => {
    const response = await api.put(
      `/products/${product.id}`,
      {
        name: product.name,
        quantity: product.quantity,
        price: product.price,
        id: product.id,
      },
    );

    dispatch(addProductToStockRequest(response.data));
  };

  const handleUpdateProduct = useCallback(
    (product: IProduct) => {
      setEditingProduct(product);
      toggleEditModal();
    },
    [setEditingProduct, toggleEditModal],
  );

  return (
    <>
      <ModalAddProduct
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleSubmit={handleSubmitAddProduct}
      />
      <ModalEditProduct
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        handleSubmit={handleSubmitEditProduct}
        editingProduct={editingProduct}
      />
      <Container>
        <Header>
          <HeaderContent>
            <img src={logoImg} alt="logo" />

            <button onClick={() => toggleModal()}>
              ADD PRODUCT
              <FiPlus />
            </button>
          </HeaderContent>
        </Header>
        <Content>
          <Title>Here you can Edit, Create, List and Delete your products</Title>

          <ProductList >
            {stock.map(item => (
                <ProductItem key={item.product.id}>
                  <ProductDetails>
                    <strong>{item.product.name}</strong>
                    <h5>Quantity: {item.product.quantity}</h5>
                    <p>Price: ${item.product.price}</p>
                  </ProductDetails>
                  <ProductButtons>
                    <button
                      type="button"
                      onClick={() => handleUpdateProduct(item.product)}
                    >
                      <FiEdit size={20} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRemoveProduct(item.product.id)}
                    >
                      <FiTrash size={20} />
                    </button>
                  </ProductButtons>
                </ProductItem>
              ))}
          </ProductList>
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
