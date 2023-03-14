import "../CheckOut.scss";
import { TextToCurrency } from '../../../global/ProcessText/ProcessText'

function CheckOutOrder({ data }) {
  return (
    <tr>
      <td>
        <img className="img-thumbnail" src={data?.img} alt="" />
        <span className="font-weight-bold ml-md-3 d-md-inline-block d-block">
          {data?.name}
        </span>
        <span className="text-secondary ml-md-4">
          Loại {data?.type}. Vị: {data?.taste}
        </span>
      </td>
      <td className="font-weight-bold align-middle text-center">
        <TextToCurrency number={data?.price} />
      </td>
      <td className="font-weight-bold align-middle text-center">
        {data?.amount}
      </td>
      <td className="font-weight-bold align-middle text-center">
        <TextToCurrency number={data?.price * data?.amount} />
      </td>
    </tr>
  );
}

export default CheckOutOrder;
