import React, { useState } from "react";
import Sidenavbar from "../../Components/Sidenavbar/Sidenavbar";
import { Link } from "react-router-dom";
import { Button, Modal } from "antd";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import TextArea from "antd/es/input/TextArea";
import "./Settings.scss";

const SMSTemplates = () => {
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
          <h2 className="set__title">SMS shablonlar</h2>
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
            title="ℹ️ SMS shablon qo'shish"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}>
            <div className="set__line-modal"></div>
            <div className="set__modal">
              <TextArea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Xabarni kiriting"
                autoSize={{
                  minRows: 5,
                  maxRows: 7,
                }}
                showCount
                style={{
                  width: "80%",
                  fontFamily: "Varela Round, sans-serif",
                  paddingTop: "5px",
                  marginBottom: "20px",
                  boxShadow: "1px 1px 10px #d3d3d3",
                }}
              />
            </div>
          </Modal>
        </div>
        <div className="set__line"></div>
        <div className="set__table">
          <div className="set__titles">
            <h4 className="set__title-t">Description</h4>
            <h4 className="set__title-t">Actions</h4>
          </div>
          <ul className="set__list">
            <li className="set__items">
              <p className="set__text">
                Assalomu aleykum, iltimos to'lovni o'z vaqtida amalga oshiring
              </p>
              <div className="set__items-btns">
                <Button className="set__items-btn" shape="circle" size="size">
                  <FaPencilAlt />
                </Button>
                <Button className="set__items-btn" shape="circle" size="size">
                  <FaTrashAlt />
                </Button>
              </div>
            </li>
            <li className="set__items">
              <p className="set__text">
                Assalomu aleykum, webinarda qatnashganingizdan hursandmiz
              </p>
              <div className="set__items-btns">
                <Button className="set__items-btn" shape="circle" size="size">
                  <FaPencilAlt />
                </Button>
                <Button className="set__items-btn" shape="circle" size="size">
                  <FaTrashAlt />
                </Button>
              </div>
            </li>
            <li className="set__items">
              <p className="set__text">
                Assalomu aleykum, siz kutayotgan guruh ochildi! Batafsil:
                https://
              </p>
              <div className="set__items-btns">
                <Button className="set__items-btn" shape="circle" size="size">
                  <FaPencilAlt />
                </Button>
                <Button className="set__items-btn" shape="circle" size="size">
                  <FaTrashAlt />
                </Button>
              </div>
            </li>
            <li className="set__items">
              <p className="set__text">
                Assalomu aleykum, bugungi bayram bilan sizni o'z jamoamiz bilan
                qutlaymiz
              </p>
              <div className="set__items-btns">
                <Button className="set__items-btn" shape="circle" size="size">
                  <FaPencilAlt />
                </Button>
                <Button className="set__items-btn" shape="circle" size="size">
                  <FaTrashAlt />
                </Button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SMSTemplates;
