import React, { useEffect } from "react";
import { postOrders } from "../../Services/getApi";

import { useStateContext } from "../../Context/ContextProviderHook";

import style from "./ShopingCart.module.css";

import { Col, Row, Input, Card, Button } from "antd";

function ShopingCart() {
  const placeholders = ["Name", "Email", "Phone", "Address"];
  const { Meta } = Card;

  const { order, totalPrice, onAdd, onRemove, setOrder, setTotalPrice } =
    useStateContext();

  useEffect(() => {
    setOrder(JSON.parse(localStorage.getItem("order")) || []);
  }, []);

  /*   const fetchOrder = async () => {
    await order.map((elem) => {
      const res = postOrders(elem);
      return res;
    });
  }; */

  const fetchOrder = async () => {
    const res = await postOrders({ order });
    return res;
  };
  console.log(order);
  return (
    <div className={style.conteiner}>
      <Row gutter={[16, 16]}>
        <Col xs={4} sm={4} md={6} lg={8} xl={8}>
          <div className={style.personData_conteiner}>
            {placeholders.map((elem) => (
              <div className={style.personData_conteiner__item} key={elem.name}>
                <Input placeholder={elem} />
              </div>
            ))}
          </div>
        </Col>

        <Col xs={20} sm={20} md={18} lg={16} xl={16}>
          <div className={style.shopitem_conteiner}>
            {!order && <h2>Нету заказов</h2>}
            {order &&
              order.map((elem) => (
                <div
                  className={style.shop_conteiner__orderitem}
                  key={elem.name}
                >
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <img
                        alt="example"
                        src="https://bytes.ua/wp-content/uploads/2017/08/no-image.png"
                      />
                    }
                    className={style.shopitem_conteiner__cart}
                  >
                    <Meta title={`${elem.name} ${elem.price} грн`} />
                    <div className={style.shopitem_conteiner__input}>
                      <div>{elem.quantity}шт.</div>
                      <div className={style.shopitem_conteiner__button}>
                        <Button
                          type="primary"
                          shape="circle"
                          onClick={() => onAdd(elem)}
                        >
                          +
                        </Button>
                        <Button
                          type="primary"
                          shape="circle"
                          onClick={() => onRemove(elem)}
                        >
                          -
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
          </div>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={4} sm={4} md={6} lg={8} xl={8}></Col>

        <Col xs={20} sm={20} md={18} lg={16} xl={16}>
          <div className={style.toal_conteiner}>
            Total price: {totalPrice}
            <Button type="dashed" size="large" onClick={fetchOrder}>
              Submit
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ShopingCart;
