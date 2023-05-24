import React, { useEffect, useState } from "react";
import { instance } from "../../API/instance";
import Sidenav from "../../Components/Sidenav/Sidenav";
import { Button, DatePicker, Input, Modal, Radio } from "antd";
import TextArea from "antd/es/input/TextArea";
import { FaPencilAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Students.scss";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState("");

  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [tel, setTel] = useState("");
  // const [category, setCategory] = useState("");

  // const navigate = useNavigate();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // const data = {
  //   name: name,
  //   age: age,
  //   tel: tel,
  // };

  // function Submit(e) {
  //   e.preventDefault();
  //   instance.post("/student", data).then(navigate("/students"));
  // }

  useEffect(() => {
    instance.get("/student").then((res) => setStudents(res.data.data));
  }, []);

  console.log(students);

  return (
    <>
      <Sidenav />
      <div className="students__wrap">
        <div className="students__start">
          <h2 className="students__title">Talabalar</h2>
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
            title="ℹ️ Yangi talaba qo'shish"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}>
            <div className="students__line-modal"></div>
            <div className="students__modal">
              <div className="students__input-box">
                <div className="students__num">+998</div>
                <Input
                  className="students__input-n"
                  type="number"
                  placeholder="Mobile Number"
                  // value={tel}
                  // onChange={(e) => setTel(e.target.value)}
                />
              </div>
              <Input
                className="students__input"
                type="text"
                placeholder="Ismi"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
              <DatePicker
                className="students__input"
                placeholder="Tug'ilgan sanasi"
                // value={age}
                // onChange={(e) => setAge(e.target.value)}
              />
              <Radio.Group
                className="students__radio-box"
                name="radiogroup"
                defaultValue={1}>
                <Radio className="students__radio" value={1}>
                  Erkak
                </Radio>
                <Radio className="students__radio" value={2}>
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
              {/* <Button onClick={Submit}>Add Student</Button> */}
            </div>
          </Modal>
        </div>
        <div className="students__line"></div>
        <div className="students__table">
          <div className="students__titles">
            <h4 className="students__title-t">Id</h4>
            <h4 className="students__title-t">Name</h4>
            <h4 className="students__title-t">Age</h4>
            <h4 className="students__title-t">Category</h4>
            <h4 className="students__title-t">Phone</h4>
            <h4 className="students__title-t">Condition</h4>
          </div>
          {students.map((item, index) => {
            return (
              <div className="students__texts" key={item._id}>
                <p className="students__text">{index + 1}</p>
                <p className="students__text">{item.name}</p>
                <p className="students__text">{item.age}</p>
                <p className="students__text">{item.category}</p>
                <p className="students__text">{item.phoneNumber}</p>
                <Link to={`/singlestudent/${item._id}`}>
                  <Button className="students__pen" shape="circle" size="size">
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

export default Students;
