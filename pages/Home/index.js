import { ContextOrder, OrderForm, OrderProvder } from "../../modules/Order";
import { Detail as PaymentDetail } from '../../modules/Payment'

export default HomePage(){
  return (
    <>
      <OrderProvder>
        <OrderDetail />
        <PaymentDetail />
      </OrderProvder>
    </>
  )
}
