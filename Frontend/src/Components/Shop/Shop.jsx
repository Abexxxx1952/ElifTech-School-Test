import React from "react";

import { useEffect } from "react";

import { getShops, getShopItems } from "../../Services/getApi";
import { useStateContext } from "../../Context/ContextProviderHook";

import style from "./Shop.module.css";
import { Col, Row, Card, Button } from "antd";

function Shop() {
  const { Meta } = Card;
  const {
    shops,
    setShops,
    shopcarts,
    setShopcarts,
    currentshops,
    setCurrentShops,
    order,
    setOrder,
    onAdd,
    totalPrice,
    setTotalPrice,
  } = useStateContext();

  useEffect(() => {
    const fetchShops = async () => {
      const res = await getShops();
      setShops(res);
      setCurrentShops(res[0].name);
    };
    fetchShops();
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await getShopItems(currentshops);
      setShopcarts(res);
    };
    fetchItems();
  }, [currentshops]);

  /*  localStorage.setItem("orderTotal", totalPrice); */

  return (
    <div className={style.container}>
      <Row gutter={[16, 16]}>
        <Col xs={4} sm={4} md={6} lg={8} xl={8}>
          <div className={style.shop_container}>
            {shops &&
              shops.map((elem) => {
                const flag = () => {
                  if (!order[0]?.shop) {
                    return false;
                  }

                  if (!!order[0]?.shop) {
                    return elem.name !== order[0].shop;
                  }
                };

                return (
                  <Button
                    onClick={() => setCurrentShops(elem.name)}
                    key={elem.name}
                    type="primary"
                    shape="round"
                    size="large"
                    disabled={flag()}
                    className={style.shop_container__item}
                  >
                    {elem.name}
                  </Button>
                );
              })}
          </div>
        </Col>

        <Col xs={20} sm={20} md={18} lg={16} xl={16}>
          <div className={style.shop_container__cart}>
            {shopcarts &&
              shopcarts.map((elem) => (
                <div className={style.shop_container__cartitem} key={elem.name}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <img
                        alt="example"
                        src="https://bytes.ua/wp-content/uploads/2017/08/no-image.png"
                      />
                    }
                  >
                    <Meta title={elem.name} />
                    <Meta title={`${elem.price} грн`} />

                    <Button
                      onClick={() => onAdd(elem)}
                      type="primary"
                      danger
                      className={style.shopitem_container__button}
                    >
                      Заказать
                    </Button>
                  </Card>
                </div>
              ))}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Shop;
