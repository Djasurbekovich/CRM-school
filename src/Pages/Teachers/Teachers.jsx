import React, { useEffect, useState } from "react";
import { instance } from "../../API/instance";
import Sidenav from "../../Components/Sidenav/Sidenav";
import {
  Button,
  DatePicker,
  Input,
  Modal,
  Radio,
  Select,
  Upload,
  message,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { FaUpload } from "react-icons/fa";
import "./Teachers.scss";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
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

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  useEffect(() => {
    instance.get("/teacher").then((res) => setTeachers(res.data.data));
  }, []);

  console.log(teachers);

  return (
    <>
      <Sidenav />
      <div className="teachers__wrap">
        <div className="teachers__start">
          <h2 className="teachers__title">O'qituvchilar</h2>
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
            title="ℹ️ Yangi xodim qo'shish"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}>
            <div className="teachers__line-modal"></div>
            <div className="teachers__modal">
              <Input
                className="teachers__input"
                type="text"
                placeholder="Ismi"
              />
              <div className="teachers__input-box">
                <div className="teachers__num">+998</div>
                <Input
                  className="teachers__input-n"
                  type="number"
                  placeholder="Mobile Number"
                />
              </div>
              <Input
                className="teachers__input"
                type="password"
                placeholder="Parol"
              />
              <Select
                defaultValue="Rol tanlang"
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
                    value: "direktor",
                    label: "CEO direktor",
                  },
                  {
                    value: "admin",
                    label: "Admin",
                  },
                  {
                    value: "kassir",
                    label: "Kassir",
                  },
                  {
                    value: "operator",
                    label: "Operator",
                  },
                  {
                    value: "teacher",
                    label: "Teacher",
                  },
                ]}
              />
              <DatePicker
                className="teachers__input"
                onChange={onChange}
                placeholder="Tug'ilgan sanasi"
              />
              <Radio.Group
                className="teachers__radio-box"
                name="radiogroup"
                defaultValue={1}>
                <Radio className="teachers__radio" value={1}>
                  Erkak
                </Radio>
                <Radio className="teachers__radio" value={2}>
                  Ayol
                </Radio>
              </Radio.Group>
              <Upload {...props}>
                <Button className="teachers__upload" icon={<FaUpload />}>
                  Click to Image
                </Button>
              </Upload>
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
        <div className="teachers__line"></div>
        <div className="teachers__table">
          <div className="teachers__titles">
            <h4 className="teachers__title-t">Id</h4>
            <h4 className="teachers__title-t">Name</h4>
            <h4 className="teachers__title-t">Age</h4>
            <h4 className="teachers__title-t">Category</h4>
            <h4 className="teachers__title-t">Phone</h4>
          </div>
          {teachers.map((item, index) => {
            return (
              <div className="teachers__texts" key={item._id}>
                <p className="teachers__text">{index + 1}</p>
                <p className="teachers__text">{item.name}</p>
                <p className="teachers__text">{item.age}</p>
                <p className="teachers__text">{item.categorys}</p>
                <p className="teachers__text">(97) 773-33-73</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Teachers;
