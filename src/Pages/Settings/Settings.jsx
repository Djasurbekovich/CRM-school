import React, { useEffect, useState } from "react";
import { instance } from "../../API/instance";
import Sidenavbar from "../../Components/Sidenavbar/Sidenavbar";
import { Link } from "react-router-dom";
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
import { FaTrashAlt, FaUpload } from "react-icons/fa";
import TextArea from "antd/es/input/TextArea";
import "./Settings.scss";

const Staffs = () => {
  const [staffs, setStaffs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    instance.get("/staff").then((res) => setStaffs(res.data.data));
  }, []);

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

  console.log(staffs);

  const [modal, contextHolder] = Modal.useModal();

  function del(_id) {
    const newStaff = staffs.filter((item) => item._id !== _id);
    setStaffs(newStaff);
  }

  return (
    <>
      <Sidenavbar />
      <div className="set__wrap">
        <div className="set__btns">
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
          <h2 className="set__title">Xodimlar</h2>
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
            <div className="set__line-modal"></div>
            <div className="set__modal">
              <Input className="set__input" type="text" placeholder="Ismi" />
              <div className="set__input-box">
                <div className="set__num">+998</div>
                <Input
                  className="set__input-n"
                  type="number"
                  placeholder="Mobile Number"
                />
              </div>
              <Input
                className="set__input"
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
                className="set__input"
                onChange={onChange}
                placeholder="Tug'ilgan sanasi"
              />
              <Radio.Group
                className="set__radio-box"
                name="radiogroup"
                defaultValue={1}>
                <Radio className="set__radio" value={1}>
                  Erkak
                </Radio>
                <Radio className="set__radio" value={2}>
                  Ayol
                </Radio>
              </Radio.Group>
              <Upload {...props}>
                <Button className="set__upload" icon={<FaUpload />}>
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
        <div className="set__line"></div>
        <div className="set__table">
          <div className="set__titles">
            <h4 className="set__title-t">Id</h4>
            <h4 className="set__title-t">Name</h4>
            <h4 className="set__title-t">Password</h4>
            <h4 className="set__title-t">Phone</h4>
            <h4 className="set__title-t">Role</h4>
            <h4 className="set__title-t">Action</h4>
          </div>
          {staffs.map((item, index) => {
            const confirm = () => {
              modal.confirm({
                title: "Delete",
                content: (
                  <p className="set__del-text">
                    Do you want to delete this staff?
                  </p>
                ),
                okText: (
                  <Button
                    className="set__del-btn"
                    type="primary"
                    onClick={() => del(item._id)}>
                    Ok
                  </Button>
                ),
                cancelText: <Button className="set__del-btn">Cancel</Button>,
              });
            };
            return (
              <div className="set__texts" key={item._id}>
                <p className="set__text">{index + 1}</p>
                <p className="set__text">{item.name}</p>
                <p className="set__text">{item.password}</p>
                <p className="set__text">{item.phoneNumber}</p>
                <p className="set__text">{item.rol}</p>
                <Button
                  className="set__items-btn"
                  shape="circle"
                  size="size"
                  onClick={confirm}>
                  <FaTrashAlt />
                </Button>
              </div>
            );
          })}
          {contextHolder}
        </div>
      </div>
    </>
  );
};

export default Staffs;
