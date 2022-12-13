import { useQuery } from "@chakra-ui/react";
import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const ContextOrder = createContext(null)

/**
type OrderProvder = {
  orders: QueryData<Orders>,
  handleSubmit: (formValues: FormValues<orderForm>) => void,
}
*/

export const useHandleSubmit = () => useContextWithSelector(ContextOrder, state => state.handleSubmit)

export const OrderProvder = ({ children }) => {
  const { state, dispatch } = useReducer()
  const orders = useQuery({ networkStrategy: 'offline' })
  // status: idle | fetching | fetched | empty | error
  // todo state api
  //
  return (
    <ContextOrder.Provider value={orders}>
      {children}
    </ContextOrder.Provider>
  )
}
// API
export const useOrders = () => useContext(ContextOrder).orders;

export const OrderList = () => {
  const orders = useContext(ContextOrder).orders;
  return orders.map() // componet/element
}

export const Empty = () => {
  const isEmpty = useContext(ContextOrder).data.length === 0;

  return <Box>{"empty"} </Box>
}

export const OrderForm = () => {
  const useFormValues = useContext(ContextOrder).values
  const handleSubmit = useContext(ContextOrder).handleSubmit

  return (
    <form onSubmit={handleSubmit}>
      {fields}
    </form>
  )
}

export const OrderDetail = () => {
  const values = useContext(ContextOrder).values
  const status = useContext(ContextOrder).status
  switch (status) {
    case 'eror':
    case 'empty':
      return null;
    default:
      return (
        <Card>
          <Card.Title>{values.orderName}</Card.Title>
        </Card>
      )
  }
}
