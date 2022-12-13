import { ContextOrder, OrderForm, OrderProvder } from "../../modules/Order";


const OrderContext = createContext(null)

const OrderProvider = ({ children }) => {
  const stateOrder = useContext(ContextOrder)
  const statePayment = useContext(ContextPayment)

  const value = {}// combined from stateOrder and statePayment;

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
}

export default function OrderPage() {
  return (
    <OrderProvder>
      <OrderProvder>
        <OrderForm />
        <OrderDetail />
        <Empty />
      </OrderProvder>
      <PaymentProvder>
        <PaymentDetail />
      </PaymentProvider>
    </OrderProvder>
  )
}
