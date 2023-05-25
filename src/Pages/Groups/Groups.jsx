import React, { useEffect, useState } from "react";
import { instance } from "../../API/instance";
import Sidenavbar from "../../Components/Sidenavbar/Sidenavbar";
import { Button, DatePicker, Input, Modal, Segmented, Select } from "antd";
import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import "./Groups.scss";

const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  useEffect(() => {
    instance.get("/groups").then((res) => setGroups(res.data.data));
  }, []);

  console.log(groups);

  return (
    <>
      <Sidenavbar />
      <div className="groups__wrap">
        <div className="groups__start">
          <h2 className="groups__title">Guruhlar</h2>
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
            title="ℹ️ Yangi guruh qo'shish"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}>
            <div className="groups__line-modal"></div>
            <div className="groups__modal">
              <Input className="groups__input" type="text" placeholder="Nomi" />
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
                className="groups__input"
                onChange={onChange}
                placeholder="Guruhni boshlash vaqti"
                style={{ marginBottom: "10px" }}
              />
            </div>
          </Modal>
        </div>
        <div className="groups__line"></div>
        <div className="groups__table">
          <Segmented
            block
            options={["Active", "Archive"]}
            style={{
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Varela Round, sans-serif",
              fontWeight: "bold",
              fontSize: "16px",
              padding: "0 10px",
            }}
          />
          <div className="groups__titles">
            <h4 className="groups__title-t">Id</h4>
            <h4 className="groups__title-t">Courses</h4>
            <h4 className="groups__title-t">Teachers</h4>
            <h4 className="groups__title-t">Time</h4>
            <h4 className="groups__title-t">Days</h4>
            <h4 className="groups__title-t">Condition</h4>
          </div>
          {groups.map((item, index) => {
            return (
              <div className="groups__texts" key={item._id}>
                <p className="groups__text">{index + 1}</p>
                <p className="groups__text">{item.category}</p>
                <p className="groups__text">{item.teacher}</p>
                <p className="groups__text">{item.startTime}</p>
                <p className="groups__text">{item.day}</p>
                <Link to={`/singlegroup/${item._id}`}>
                  <Button className="groups__pen" shape="circle" size="size">
                    <FaPencilAlt />
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Groups;
