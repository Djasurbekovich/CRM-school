import React, { useState } from "react";
import Sidenavbar from "../../Components/Sidenavbar/Sidenavbar";
import { Link } from "react-router-dom";
import { Button, Input, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import "./Settings.scss";

const Rooms = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Sidenavbar />
      <div className="set__wrap">
        <div
          className="set__btns"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "Varela Round, sans-serif",
            fontWeight: "bold",
            fontSize: "17px",
            padding: "0 10px",
            marginBottom: "25px",
          }}>
          <Link to="/settings">
            <Button className="set__btn">Xodimlar</Button>
          </Link>
          <Link to="/settings/rooms">
            <Button className="set__btn">Xonalar</Button>
          </Link>
          <Link to="/settings/autosms">
            <Button className="set__btn">Avto-SMS</Button>
          </Link>
          <Link to="/settings/smstemplates">
            <Button className="set__btn">SMS-shablonlar</Button>
          </Link>
        </div>
        <div className="set__start">
          <h2 className="set__title">Xonalar</h2>
          <Button
            type="primary"
            onClick={showModal}
            style={{
              height: "40px",
              fontFamily: "Varela Round, sans-serif",
              fontSize: "16px",
            }}>
            Yangisini qo'shish
          </Button>
          <Modal
            title="ℹ️ Yangi xona qo'shish"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}>
            <div className="set__line-modal"></div>
            <div className="set__modal">
              <Input className="set__input" type="text" placeholder="Nomi" />
              <TextArea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Tavsif"
                autoSize={{
                  minRows: 4,
                  maxRows: 6,
                }}
                style={{
                  width: "80%",
                  fontFamily: "Varela Round, sans-serif",
                  paddingTop: "5px",
                  marginBottom: "10px",
                  boxShadow: "1px 1px 10px #d3d3d3",
                }}
              />
            </div>
          </Modal>
        </div>
        <div className="set__line"></div>
        <div className="set__table">
          <div className="set__titler">
            <h4 className="set__title-t">Id</h4>
            <h4 className="set__title-t">Name</h4>
          </div>
          <ul className="set__list">
            <li className="set__item">
              <p className="set__text">1</p>
              <p className="set__text">1-xona</p>
            </li>
            <li className="set__item">
              <p className="set__text">2</p>
              <p className="set__text">2-xona</p>
            </li>
            <li className="set__item">
              <p className="set__text">3</p>
              <p className="set__text">3-xona</p>
            </li>
            <li className="set__item">
              <p className="set__text">4</p>
              <p className="set__text">4-xona</p>
            </li>
            <li className="set__item">
              <p className="set__text">5</p>
              <p className="set__text">5-xona</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Rooms;
