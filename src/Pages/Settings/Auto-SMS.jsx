import React, { useState } from "react";
import Sidenavbar from "../../Components/Sidenavbar/Sidenavbar";
import { Link } from "react-router-dom";
import { Button, Switch } from "antd";
import { FaMousePointer } from "react-icons/fa";
import TextArea from "antd/es/input/TextArea";
import "./Settings.scss";

const AutoSMS = () => {
  const [value, setValue] = useState("");

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const oonChange = (e) => {
    console.log("Change:", e.target.value);
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
        <div className="set__sms-wrap">
          <div className="set__sms-box">
            <h3 className="set__sms-title">SMS turi</h3>
            <ul className="set__sms-list">
              <li className="set__sms-item">
                <div className="set__sms-item-l">
                  <p>To'lov amalga oshirildi</p>
                  <Button
                    shape="circle"
                    size="size"
                    style={{
                      fontSize: "16px",
                      color: "rgb(75, 75, 75)",
                      backgroundColor: "initial",
                      border: "none",
                    }}>
                    <FaMousePointer />
                  </Button>
                </div>
                <Switch defaultChecked onChange={oonChange} />
              </li>
              <li className="set__sms-item">
                <div className="set__sms-item-l">
                  <p>Talaba guruhga qo'shildi</p>
                  <Button
                    shape="circle"
                    size="size"
                    style={{
                      fontSize: "16px",
                      color: "rgb(75, 75, 75)",
                      backgroundColor: "initial",
                      border: "none",
                    }}>
                    <FaMousePointer />
                  </Button>
                </div>
                <Switch defaultChecked onChange={onChange} />
              </li>
              <li className="set__sms-item">
                <div className="set__sms-item-l">
                  <p>Talaba tug'ilgan kuni</p>
                  <Button
                    shape="circle"
                    size="size"
                    style={{
                      fontSize: "16px",
                      color: "rgb(75, 75, 75)",
                      backgroundColor: "initial",
                      border: "none",
                    }}>
                    <FaMousePointer />
                  </Button>
                </div>
                <Switch defaultChecked onChange={onChange} />
              </li>
            </ul>
          </div>
          <div className="set__sms-box">
            <h3 className="set__sms-title">SMS matn:</h3>
            <TextArea
              style={{
                width: 400,
                height: 150,
                fontFamily: "Varela Round, sans-serif",
                fontSize: "16px",
                color: "rgb(75, 75, 75)",
                border: "2px solid #d3d3d3",
                borderRadius: "12px",
                paddingTop: "10px",
                marginBottom: "20px",
                resize: "none",
              }}
              onChange={onChange}
              placeholder="SMS-matni"
            />
            <h3 className="set__sms-title">Yuborilgan SMS misoli</h3>
            <TextArea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="SMS-matn"
              autoSize={{
                minRows: 4,
                maxRows: 6,
              }}
              showCount
              style={{
                fontSize: "16px",
                color: "rgb(75, 75, 75)",
                background: "initial",
                marginBottom: "30px",
              }}
            />
            <div style={{ textAlign: "end" }}>
              <Button
                className="set__sms-save"
                type="primary"
                style={{
                  height: 40,
                  fontSize: "17px",
                  textAlign: "end",
                  padding: "0 25px",
                }}>
                Saqlash
              </Button>
            </div>
          </div>
          <div className="set__sms-box">
            <h3 className="set__sms-title">Tavsif</h3>
            <div className="set__sms-box-e">
              <h4 className="set__sms-title">Mavjud o'zgaruvchilar</h4>
              <div className="set__sms-texts">
                <p>(STUDENT) - talabaning ismi</p>
                <p>(GROUP) - guruh nomi</p>
                <p>(SUM) - to'loм miqdori</p>
                <p>(LC) - o'quv markazingiz nomi</p>
                <p>(TEACHER) - auto-sms-teacher</p>
                <p>(TIME) - vaqt</p>
                <p>(ROOM) - xona</p>
                <p>(DAYS) - kunlar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AutoSMS;
