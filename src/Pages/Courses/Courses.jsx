import React, { useEffect, useState } from "react";
import { instance } from "../../API/instance";
import Sidenavbar from "../../Components/Sidenavbar/Sidenavbar";
import { Button, Input, Modal, Radio, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import "./Courses.scss";

const Courses = () => {
  const [courses, setCourses] = useState([]);
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

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  useEffect(() => {
    instance.get("/category").then((res) => setCourses(res.data.data));
  }, []);

  console.log(courses);

  return (
    <>
      <Sidenavbar />
      <div className="courses__wrap">
        <div className="courses__start">
          <h2 className="courses__title">Kurslar</h2>
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
            title="ℹ️ Yangi kurs qo'shish"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}>
            <div className="courses__line-modal"></div>
            <div className="courses__modal">
              <Input
                className="courses__input"
                type="text"
                placeholder="Nomi"
              />
              <Radio.Group
                className="courses__radio-box"
                name="radiogroup"
                defaultValue={1}>
                <Radio className="courses__radio" value={1}>
                  Online
                </Radio>
                <Radio className="courses__radio" value={2}>
                  Offline
                </Radio>
                <Radio className="courses__radio" value={3}>
                  Video Kurs
                </Radio>
              </Radio.Group>
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
              <Input
                className="courses__input"
                type="text"
                placeholder="Narx"
              />
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
        <div className="courses__line"></div>
        <div className="courses__box">
          {courses.map((item) => {
            return (
              <ul className="courses__list" key={item._id}>
                <li className="courses__item">
                  <div className="courses__img-wrap">
                    <img
                      className="courses__img"
                      src="https://modme-crm.vercel.app/assets/books-a285f3d4.png"
                      alt="Image"
                    />
                  </div>
                  <h4 className="courses__name">{item.title}</h4>
                  <p className="courses__price">{item.price} UZS</p>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Courses;
