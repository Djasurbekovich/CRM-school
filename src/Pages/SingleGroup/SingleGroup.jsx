import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../../API/instance";
import Sidenav from "../../Components/Sidenav/Sidenav";
import { Button, DatePicker, Input, Modal, Radio, Select } from "antd";
import { FaFlag, FaPen, FaTrash } from "react-icons/fa";
import "./SingleGroup.scss";

const SingleGroup = () => {
  const { _id } = useParams();

  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <p className="single__del-text">Do you want to delete this group?</p>
      ),
      okText: (
        <Button className="single__del-btn" type="primary">
          Ok
        </Button>
      ),
      cancelText: <Button className="single__del-btn">Cancel</Button>,
    });
  };

  return (
    <>
      <Sidenav />
      <div className="single__wrap">
        <h2 className="single__title" style={{ marginBottom: "25px" }}>
          {data.gropName} * {data.category} * {data.teacher}
        </h2>
        <div className="single__box">
          <div className="single__box-left">
            <div className="single__left-start">
              <h3 className="single__name">{data.gropName}</h3>
              <div className="single__icons">
                <Button className="single__icon" onClick={showModal}>
                  <FaPen />
                </Button>
                <Modal
                  title="ℹ️ Yangi guruh qo'shish"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}>
                  <div className="single__line-modal"></div>
                  <div className="single__modal">
                    <Input
                      className="single__input"
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
                      className="single__input"
                      placeholder="Guruhni boshlash vaqti"
                      style={{ marginBottom: "10px" }}
                    />
                  </div>
                </Modal>
                <Button className="single__icon" onClick={confirm}>
                  <FaTrash />
                </Button>
                {contextHolder}
              </div>
            </div>
            <div className="single__item">
              <p className="single__desc">
                {data.category} * {data.teacher}
              </p>
              <div className="single__item-box">
                <p className="single__text">
                  Narxi: <span>... so'm</span>
                </p>
                <p className="single__text">
                  Kunlar: <span>{data.day}</span>
                </p>
              </div>
              <div className="single__item-box">
                <p className="single__text">
                  Xonalar: <span>{data.room}</span>
                </p>
                <p className="single__text">
                  Boshlash: <span>{data.startTime}</span>
                </p>
              </div>
              <div className="single__item-box">
                <p className="single__text">
                  Boshlash sanasi: <span>{data.startGroup}</span>
                </p>
                <p className="single__text">
                  Tugash sanasi: <span>{data.endGroup}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="single__box-right">
            <div className="single__btns">
              <Button className="single__btn">Profil</Button>
              <Button className="single__btn">Qo'ng'iroqlar tarixi</Button>
              <Button className="single__btn">Tarix</Button>
            </div>
            <div className="single__science">
              <h3 className="single__name">{data.category}</h3>
              <FaFlag className="single__icon-flag" />
            </div>
            <h2 className="single__title">Guruhlar</h2>
            <div className="single__box-rb">
              <div className="single__display">
                <div className="single__flex">
                  <h3 className="single__name">{data.category}</h3>
                  <h3 className="single__name">O'qituvchi</h3>
                </div>
                <div className="single__flex">
                  <p className="single__text">Boshlash sanasi</p>
                  <p className="single__text">Tugash sanasi</p>
                  <p>Kun * Vaqt</p>
                </div>
              </div>
              <div className="single__line"></div>
              <div className="single__flex">
                <p className="single__desc">
                  Holat: <span>Harakatsiz (Sinov)</span>
                </p>
                <p className="single__desc">
                  Talaba qo'shilgan sana: <span>20/07/2023</span>
                </p>
                <p className="single__desc">
                  Bu talaba uchun narx: <span>... so'm</span>
                </p>
              </div>
            </div>
            <h2 className="single__title">To'lovlar</h2>
            <div className="single__box-end">
              <p className="single__desc">Ma'lumotlar topilmadi 🥲</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleGroup;
