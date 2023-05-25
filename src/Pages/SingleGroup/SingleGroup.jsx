import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../../API/instance";
import Sidenavbar from "../../Components/Sidenavbar/Sidenavbar";
import { Button, DatePicker, Input, Modal, Radio, Select } from "antd";
import { FaMinusCircle, FaPen, FaPlusCircle, FaTrash } from "react-icons/fa";
import "./SingleGroup.scss";

const SingleGroup = () => {
  const { _id } = useParams();

  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);
  const [toggle6, setToggle6] = useState(false);
  const [toggle7, setToggle7] = useState(false);
  const [toggle8, setToggle8] = useState(false);
  const [toggle9, setToggle9] = useState(false);
  const [toggle10, setToggle10] = useState(false);
  const [toggle11, setToggle11] = useState(false);
  const [toggle12, setToggle12] = useState(false);
  const [toggle13, setToggle13] = useState(false);
  const [toggle14, setToggle14] = useState(false);

  useEffect(() => {
    instance
      .get(`/groups/student/${_id}`)
      .then((res) => setData(res.data.data[0]));
  }, []);

  console.log(data);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const [modal, contextHolder] = Modal.useModal();
  const confirm = () => {
    modal.confirm({
      title: "Delete",
      content: (
        <p className="single2__del-text">Do you want to delete this group?</p>
      ),
      okText: (
        <Button className="single2__del-btn" type="primary">
          Ok
        </Button>
      ),
      cancelText: <Button className="single2__del-btn">Cancel</Button>,
    });
  };

  return (
    <>
      <Sidenavbar />
      <div className="single2__wrap">
        <h2 className="single2__title" style={{ marginBottom: "25px" }}>
          {data.gropName} * {data.category} * {data.teacher}
        </h2>
        <div className="single2__box">
          <div className="single2__box-left">
            <div className="single2__left-start">
              <h3 className="single2__name">{data.gropName}</h3>
              <div className="single2__icons">
                <Button className="single2__icon" onClick={showModal}>
                  <FaPen />
                </Button>
                <Modal
                  title="ℹ️ Yangi guruh qo'shish"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}>
                  <div className="single2__line-modal"></div>
                  <div className="single2__modal">
                    <Input
                      className="single2__input"
                      type="text"
                      placeholder="Nomi"
                    />
                    <Select
                      defaultValue="Kursni tanlang"
                      style={{
                        width: "80%",
                        fontStyle: "italic",
                        letterSpacing: "0.5px",
                        borderRadius: "5px",
                        boxShadow: "1px 1px 10px #d3d3d3",
                      }}
                      onChange={handleChange}
                      allowClear
                      options={[
                        {
                          value: "targetolog",
                          label: "Targetolog",
                        },
                        {
                          value: "web",
                          label: "Web",
                        },
                        {
                          value: "website",
                          label: "Web site qilish",
                        },
                        {
                          value: "english",
                          label: "English beginner",
                        },
                        {
                          value: "russian",
                          label: "Rus tili",
                        },
                        {
                          value: "smm",
                          label: "SMM",
                        },
                        {
                          value: "3dmax",
                          label: "3D's MAX",
                        },
                      ]}
                    />
                    <Select
                      defaultValue="O'qituvchini tanlang"
                      style={{
                        width: "80%",
                        fontStyle: "italic",
                        letterSpacing: "0.5px",
                        borderRadius: "5px",
                        boxShadow: "1px 1px 10px #d3d3d3",
                      }}
                      onChange={handleChange}
                      allowClear
                      options={[
                        {
                          value: "fotimayuldasheva",
                          label: "Fotima Yuldasheva",
                        },
                        {
                          value: "muhammadilloxakimov",
                          label: "Muhammadillo Xakimov",
                        },
                        {
                          value: "asalileysboyeva",
                          label: "Asal Ileysboyeva",
                        },
                        {
                          value: "ahmadshox",
                          label: "Ahmad shox",
                        },
                        {
                          value: "shaxzodaabdullayeva",
                          label: "Shaxzoda Abdullayeva",
                        },
                        {
                          value: "e'zozaabdullayeva",
                          label: "E'zoza Abdullayeva",
                        },
                        {
                          value: "nafisaahmadaliyeva",
                          label: "Nafisa Ahmadaliyeva",
                        },
                        {
                          value: "malikaelnazarova",
                          label: "Malika Elnazarova",
                        },
                      ]}
                    />
                    <Select
                      defaultValue="Kunlar"
                      style={{
                        width: "80%",
                        fontStyle: "italic",
                        letterSpacing: "0.5px",
                        borderRadius: "5px",
                        boxShadow: "1px 1px 10px #d3d3d3",
                      }}
                      onChange={handleChange}
                      allowClear
                      options={[
                        {
                          value: "evendays",
                          label: "Juft kunlar",
                        },
                        {
                          value: "odddays",
                          label: "Toq kunlar",
                        },
                        {
                          value: "weekend",
                          label: "Dam olish kuni",
                        },
                        {
                          value: "everyday",
                          label: "Har kuni",
                        },
                        {
                          value: "other",
                          label: "Boshqa",
                        },
                      ]}
                    />
                    <Select
                      defaultValue="Xona tanlang"
                      style={{
                        width: "80%",
                        fontStyle: "italic",
                        letterSpacing: "0.5px",
                        borderRadius: "5px",
                        boxShadow: "1px 1px 10px #d3d3d3",
                      }}
                      onChange={handleChange}
                      allowClear
                      options={[
                        {
                          value: "room1",
                          label: "1-xona",
                        },
                        {
                          value: "room2",
                          label: "2-xona",
                        },
                        {
                          value: "room3",
                          label: "3-xona",
                        },
                        {
                          value: "room4",
                          label: "4-xona",
                        },
                        {
                          value: "room5",
                          label: "5-xona",
                        },
                      ]}
                    />
                    <DatePicker
                      className="single2__input"
                      placeholder="Guruhni boshlash vaqti"
                      style={{ marginBottom: "10px" }}
                    />
                  </div>
                </Modal>
                <Button className="single2__icon" onClick={confirm}>
                  <FaTrash />
                </Button>
                {contextHolder}
              </div>
            </div>
            <div className="single2__item">
              <p className="single2__desc">
                {data.category} * {data.teacher}
              </p>
              <div className="single2__item-box">
                <p className="single2__text">
                  Narxi: <span>... so'm</span>
                </p>
                <p className="single2__text">
                  Kunlar: <span>{data.day}</span>
                </p>
              </div>
              <div className="single2__item-box">
                <p className="single2__text">
                  Xonalar: <span>{data.room}</span>
                </p>
                <p className="single2__text">
                  Boshlash: <span>{data.startTime}</span>
                </p>
              </div>
              <div className="single2__item-box">
                <p className="single2__text">
                  Boshlash sanasi: <span>{data.startGroup}</span>
                </p>
                <p className="single2__text">
                  Tugash sanasi: <span>{data.endGroup}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="single2__box-right">
            <div className="single2__btns">
              <Button className="single2__btn">Davomat</Button>
              <Button className="single2__btn">Chegirmalar</Button>
            </div>
            <div className="single2__table">
              <div className="single2__titles">
                <h4 className="single2__title-t">Ismi</h4>
                <h4 className="single2__title-t">01</h4>
                <h4 className="single2__title-t">03</h4>
                <h4 className="single2__title-t">05</h4>
                <h4 className="single2__title-t">08</h4>
                <h4 className="single2__title-t">10</h4>
                <h4 className="single2__title-t">12</h4>
                <h4 className="single2__title-t">15</h4>
                <h4 className="single2__title-t">17</h4>
                <h4 className="single2__title-t">19</h4>
                <h4 className="single2__title-t">22</h4>
                <h4 className="single2__title-t">24</h4>
                <h4 className="single2__title-t">26</h4>
                <h4 className="single2__title-t">29</h4>
                <h4 className="single2__title-t">31</h4>
              </div>
              <div className="single2__texts">
                <p className="single2__text">{data.teacher}</p>
                <button
                  className="single2__btn-icons"
                  onClick={() => {
                    setToggle(!toggle);
                  }}>
                  {toggle ? (
                    <FaMinusCircle className="single2__minus" />
                  ) : (
                    <FaPlusCircle className="single2__plus" />
                  )}
                </button>
                <button
                  className="single2__btn-icons"
                  onClick={() => {
                    setToggle2(!toggle2);
                  }}>
                  {toggle2 ? (
                    <FaMinusCircle className="single2__minus" />
                  ) : (
                    <FaPlusCircle className="single2__plus" />
                  )}
                </button>
                <button
                  className="single2__btn-icons"
                  onClick={() => {
                    setToggle3(!toggle3);
                  }}>
                  {toggle3 ? (
                    <FaMinusCircle className="single2__minus" />
                  ) : (
                    <FaPlusCircle className="single2__plus" />
                  )}
                </button>
                <button
                  className="single2__btn-icons"
                  onClick={() => {
                    setToggle4(!toggle4);
                  }}>
                  {toggle4 ? (
                    <FaMinusCircle className="single2__minus" />
                  ) : (
                    <FaPlusCircle className="single2__plus" />
                  )}
                </button>
                <button
                  className="single2__btn-icons"
                  onClick={() => {
                    setToggle5(!toggle5);
                  }}>
                  {toggle5 ? (
                    <FaMinusCircle className="single2__minus" />
                  ) : (
                    <FaPlusCircle className="single2__plus" />
                  )}
                </button>
                <button
                  className="single2__btn-icons"
                  onClick={() => {
                    setToggle6(!toggle6);
                  }}>
                  {toggle6 ? (
                    <FaMinusCircle className="single2__minus" />
                  ) : (
                    <FaPlusCircle className="single2__plus" />
                  )}
                </button>
                <button
                  className="single2__btn-icons"
                  onClick={() => {
                    setToggle7(!toggle7);
                  }}>
                  {toggle7 ? (
                    <FaMinusCircle className="single2__minus" />
                  ) : (
                    <FaPlusCircle className="single2__plus" />
                  )}
                </button>
                <button
                  className="single2__btn-icons"
                  onClick={() => {
                    setToggle8(!toggle8);
                  }}>
                  {toggle8 ? (
                    <FaMinusCircle className="single2__minus" />
                  ) : (
                    <FaPlusCircle className="single2__plus" />
                  )}
                </button>
                <button
                  className="single2__btn-icons"
                  onClick={() => {
                    setToggle9(!toggle9);
                  }}>
                  {toggle9 ? (
                    <FaMinusCircle className="single2__minus" />
                  ) : (
                    <FaPlusCircle className="single2__plus" />
                  )}
                </button>
                <button
                  className="single2__btn-icons"
                  onClick={() => {
                    setToggle10(!toggle10);
                  }}>
                  {toggle10 ? (
                    <FaMinusCircle className="single2__minus" />
                  ) : (
                    <FaPlusCircle className="single2__plus" />
                  )}
                </button>
                <button
                  className="single2__btn-icons"
                  onClick={() => {
                    setToggle11(!toggle11);
                  }}>
                  {toggle11 ? (
                    <FaMinusCircle className="single2__minus" />
                  ) : (
                    <FaPlusCircle className="single2__plus" />
                  )}
                </button>
                <button
                  className="single2__btn-icons"
                  onClick={() => {
                    setToggle12(!toggle12);
                  }}>
                  {toggle12 ? (
                    <FaMinusCircle className="single2__minus" />
                  ) : (
                    <FaPlusCircle className="single2__plus" />
                  )}
                </button>
                <button
                  className="single2__btn-icons"
                  onClick={() => {
                    setToggle13(!toggle13);
                  }}>
                  {toggle13 ? (
                    <FaMinusCircle className="single2__minus" />
                  ) : (
                    <FaPlusCircle className="single2__plus" />
                  )}
                </button>
                <button
                  className="single2__btn-icons"
                  onClick={() => {
                    setToggle14(!toggle14);
                  }}>
                  {toggle14 ? (
                    <FaMinusCircle className="single2__minus" />
                  ) : (
                    <FaPlusCircle className="single2__plus" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleGroup;
