import React from "react";
import style from "./ShopingCart.module.css";

import { Col, Row, Input, Card, InputNumber, Button } from "antd";

function ShopingCart(props) {
  const placeholders = ["Name", "Email", "Phone", "Address"];
  const { Meta } = Card;
  const onChangeInput = () => {};
  return (
    <div className={style.conteiner}>
      <Row gutter={[16, 16]}>
        <Col xs={4} sm={4} md={6} lg={8} xl={8}>
          <div className={style.personData_conteiner}>
            {placeholders.map((elem) => (
              <div className={style.personData_conteiner__item}>
                <Input placeholder={elem} />
              </div>
            ))}
          </div>
        </Col>

        <Col xs={20} sm={20} md={18} lg={16} xl={16}>
          <div className={style.shopitem_conteiner}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
              className={style.shopitem_conteiner__cart}
            >
              <Meta title="Europe Street beat" />
              <InputNumber
                min={1}
                max={10}
                defaultValue={1}
                onChange={onChangeInput}
                className={style.shopitem_conteiner__input}
              />
            </Card>
          </div>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={4} sm={4} md={6} lg={8} xl={8}></Col>

        <Col xs={20} sm={20} md={18} lg={16} xl={16}>
          <div className={style.toal_conteiner}>
            Total price: 47
            <Button type="dashed" size="large">
              Submit
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ShopingCart;
