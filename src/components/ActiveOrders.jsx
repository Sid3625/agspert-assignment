import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';
import { getOrders } from '../api/ordersData';

const fetchActiveOrders = async () => {
  const orders = await getOrders();
  return orders.filter(order => order.status === 'unpaid');
};

const ActiveOrders = () => {
  const { data, error, isLoading } = useQuery('activeOrders', fetchActiveOrders);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading active orders</div>;

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Customer Name</Th>
          <Th>Price</Th>
          <Th>Last Modified</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>  
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td></Td>
            <Td>
              <Button size='xs' mx={1}>Edit</Button>
            </Td>
          </Tr>
      
      </Tbody>
    </Table>
  );
};

export default ActiveOrders;
