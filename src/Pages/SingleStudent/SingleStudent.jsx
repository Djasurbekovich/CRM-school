import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../../API/instance";
import Sidenavbar from "../../Components/Sidenavbar/Sidenavbar";
import { Button, DatePicker, Input, Modal, Radio, Select } from "antd";
import {
  FaCommentDots,
  FaFlag,
  FaMoneyCheck,
  FaPen,
  FaTrash,
} from "react-icons/fa";
import TextArea from "antd/es/input/TextArea";
import "./SingleStudent.scss";

const SingleStudent = () => {
  const { _id } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    instance.get(`/student/${_id}`).then((res) => setData(res.data.data));
  }, []);

  console.log(data);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comModalOpen, setComModalOpen] = useState(false);
  const [payModalOpen, setPayModalOpen] = useState(false);
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
  const comModal = () => {
    setComModalOpen(true);
  };
  const handleComOk = () => {
    setComModalOpen(false);
  };
  const handleComCancel = () => {
    setComModalOpen(false);
  };
  const payModal = () => {
    setPayModalOpen(true);
  };
  const handlePayOk = () => {
    setPayModalOpen(false);
  };
  const handlePayCancel = () => {
    setPayModalOpen(false);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const [modal, contextHolder] = Modal.useModal();
  const confirm = () => {
    modal.confirm({
      title: "Delete",
      content: (
        <p className="single__del-text">
          Do you want to remove this student from the group?
        </p>
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
      <Sidenavbar />
      <div className="single__wrap">
        <h2 className="single__title" style={{ marginBottom: "25px" }}>
          {data.name}
        </h2>
        <div className="single__box">
          <div className="single__box-left">
            <h3 className="single__name">{data.name}</h3>
            <div className="single__item">
              <p className="single__text">
                Balansi: <span>... so'm</span>
              </p>
              <p className="single__text">
                Telefon: <span>{data.phoneNumber}</span>
              </p>
              <p className="single__text">
                Tug'ilgan kuni: <span>22/08/2002</span>
              </p>
            </div>
            <div className="single__icons">
              <Button className="single__icon" onClick={showModal}>
                <FaPen />
              </Button>
              <Modal
                title="ℹ️ Yangi talaba qo'shish"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}>
                <div className="single__line-modal"></div>
                <div className="single__modal">
                  <div className="single__input-box">
                    <div className="single__num">+998</div>
                    <Input
                      className="single__input-n"
                      type="number"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <Input
                    className="single__input"
                    type="text"
                    placeholder="Ismi"
                  />
                  <DatePicker
                    className="single__input"
                    placeholder="Tug'ilgan sanasi"
                  />
                  <Radio.Group
                    className="single__radio-box"
                    name="radiogroup"
                    defaultValue={1}>
                    <Radio className="single__radio" value={1}>
                      Erkak
                    </Radio>
                    <Radio className="single__radio" value={2}>
                      Ayol
                    </Radio>
                  </Radio.Group>
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
              <Button className="single__icon" onClick={comModal}>
                <FaCommentDots />
              </Button>
              <Modal
                title="ℹ️ Talabaga SMS yuborish"
                open={comModalOpen}
                onOk={handleComOk}
                onCancel={handleComCancel}>
                <div className="single__line-modal"></div>
                <div className="single__modal">
                  <h3 className="single__name">Yuboruvchi: 3700</h3>
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
                  <h3 className="single__name">SMS shablonlar</h3>
                  <ul className="single__modal-list">
                    <li className="single__modal-item">
                      <p className="single__text">
                        Assalomu aleykum, iltimos to'lovni o'z vaqtida amalga
                        oshiring
                      </p>
                    </li>
                    <li className="single__modal-item">
                      <p className="single__text">
                        Assalomu aleykum, webinarda qatnashganingizdan
                        hursandmiz
                      </p>
                    </li>
                    <li className="single__modal-item">
                      <p className="single__text">
                        Assalomu aleykum, siz kutayotgan guruh ochildi!
                        Batafsil: https://
                      </p>
                    </li>
                    <li className="single__modal-item">
                      <p className="single__text">
                        Assalomu aleykum, bugungi bayram bilan sizni o'z
                        jamoamiz bilan qutlaymiz
                      </p>
                    </li>
                  </ul>
                </div>
              </Modal>
              <Button className="single__icon" onClick={payModal}>
                <FaMoneyCheck />
              </Button>
              <Modal
                title="ℹ️ To'lov qo'shish"
                open={payModalOpen}
                onOk={handlePayOk}
                onCancel={handlePayCancel}>
                <div className="single__line-modal"></div>
                <div className="single__modal">
                  <Input
                    className="single__input"
                    type="text"
                    placeholder="Ismi"
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
                        value: "russian",
                        label: "Rus tili - Shaxzoda Abdullayeva - 08:00",
                      },
                      {
                        value: "smm",
                        label: "SMM - Asal Ileysboyeva - 08:00",
                      },
                      {
                        value: "3dmax",
                        label: "3D's MAX - E'zoza Abdullayeva - 08:00",
                      },
                      {
                        value: "motiongraphic",
                        label: "Motion Grafika - Shaxzoda Abdullayeva - 08:00",
                      },
                      {
                        value: "motiongraphic",
                        label: "Motion Grafika - E'zoza Abdullayeva - 08:00",
                      },
                      {
                        value: "arabian",
                        label: "Arab tili - E'zoza Abdullayeva - 08:00",
                      },
                      {
                        value: "3dmax",
                        label: "3D's MAX - Ahmad shox - 08:00",
                      },
                    ]}
                  />
                  <Radio.Group
                    className="single__radio-box"
                    name="radiogroup"
                    defaultValue={1}>
                    <div>
                      <Radio className="single__radio" value={1}>
                        Naqd pul
                      </Radio>
                      <Radio className="single__radio" value={2}>
                        Payme
                      </Radio>
                    </div>
                    <div>
                      <Radio className="single__radio" value={3}>
                        Plastik karta
                      </Radio>
                      <Radio className="single__radio" value={4}>
                        Click
                      </Radio>
                    </div>
                    <div>
                      <Radio className="single__radio" value={5}>
                        Bank xisobi
                      </Radio>
                      <Radio className="single__radio" value={6}>
                        Uzum
                      </Radio>
                    </div>
                  </Radio.Group>
                  <Input
                    className="single__input"
                    type="text"
                    placeholder="Miqdor"
                  />
                  <DatePicker className="single__input" placeholder="Sana" />
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
              <Button className="single__icon" onClick={confirm}>
                <FaTrash />
              </Button>
              {contextHolder}
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

export default SingleStudent;
