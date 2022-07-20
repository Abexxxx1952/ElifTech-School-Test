import React from "react";

import style from "./Shop.module.css";
import { Col, Row, Card, Button } from "antd";

function Shop() {
  const { Meta } = Card;
  return (
    <div className={style.conteiner}>
      <Row gutter={[16, 16]}>
        <Col xs={4} sm={4} md={6} lg={8} xl={8}>
          <div className={style.shop_conteiner}>
            <Button
              type="primary"
              shape="round"
              size="large"
              className={style.shop_conteiner__item}
            >
              MC Donny
            </Button>
            <Button
              type="primary"
              shape="round"
              size="large"
              className={style.shop_conteiner__item}
            >
              CFK
            </Button>
            <Button
              type="primary"
              shape="round"
              size="large"
              className={style.shop_conteiner__item}
            >
              etc...
            </Button>
            <Button
              type="primary"
              shape="round"
              size="large"
              className={style.shop_conteiner__item}
            >
              etc...
            </Button>
            <Button
              type="primary"
              shape="round"
              size="large"
              className={style.shop_conteiner__item}
            >
              etc...
            </Button>
          </div>
        </Col>

        <Col xs={20} sm={20} md={18} lg={16} xl={16}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" />
            <Button
              type="primary"
              danger
              className={style.shopitem_conteiner__button}
            >
              Заказать
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Shop;
