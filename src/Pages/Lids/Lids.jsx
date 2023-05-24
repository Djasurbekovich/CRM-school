import React, { useState } from "react";
import Sidenav from "../../Components/Sidenav/Sidenav";
import { Button, IconButton, Menu } from "@mui/material";
import { Dropdown, Input } from "antd";
import {
  FaEllipsisV,
  FaListUl,
  FaPlusCircle,
  FaTrashAlt,
} from "react-icons/fa";
import "./Lids.scss";

const Lids = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const items = [
    {
      key: "1",
      label: "Assalamu alaykum",
    },
  ];

  return (
    <>
      <Sidenav />
      <div className="lids__wrap">
        <ul className="lids__list">
          <li className="lids__item">
            <h3 className="lids__title">So'rovlar</h3>
            <div className="lids__btns">
              <Button
                className="lids__btn"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}>
                <FaPlusCircle style={{ fontSize: "16px" }} /> So'rov qo'shish
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}>
                <div className="lids__input-wrap">
                  <Input className="lids__input-menu" placeholder="Name" />
                  <Input className="lids__input-menu" placeholder="Phone" />
                  <Input
                    className="lids__input-menu"
                    placeholder="Description"
                  />
                </div>
              </Menu>
              <IconButton className="lids__btn">
                <FaListUl style={{ fontSize: "16px" }} />
              </IconButton>
            </div>
            <div className="lids__box">
              <Dropdown
                menu={{
                  items,
                }}
                placement="top"
                arrow>
                <IconButton className="lids__desc-btn">
                  <FaEllipsisV />
                </IconButton>
              </Dropdown>
              <h4 className="lids__name">Elmurod</h4>/
              <p className="lids__tel">(90) 901-49-59</p>
              <IconButton className="lids__trash-btn">
                <FaTrashAlt />
              </IconButton>
            </div>
          </li>
          <li className="lids__item">
            <h3 className="lids__title">Kutish</h3>
            <div className="lids__btns">
              <Button
                className="lids__btn"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}>
                <FaPlusCircle style={{ fontSize: "16px" }} /> So'rov qo'shish
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}>
                <div className="lids__input-wrap">
                  <Input className="lids__input-menu" placeholder="Name" />
                  <Input className="lids__input-menu" placeholder="Phone" />
                  <Input
                    className="lids__input-menu"
                    placeholder="Description"
                  />
                </div>
              </Menu>
              <IconButton className="lids__btn">
                <FaListUl style={{ fontSize: "16px" }} />
              </IconButton>
            </div>
            <div className="lids__box">
              <Dropdown
                menu={{
                  items,
                }}
                placement="top"
                arrow>
                <IconButton className="lids__desc-btn">
                  <FaEllipsisV />
                </IconButton>
              </Dropdown>
              <h4 className="lids__name">Elmurod</h4>/
              <p className="lids__tel">(90) 901-49-59</p>
              <IconButton className="lids__trash-btn">
                <FaTrashAlt />
              </IconButton>
            </div>
          </li>
          <li className="lids__item">
            <h3 className="lids__title">To'plam</h3>
            <div className="lids__btns">
              <Button
                className="lids__btn"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}>
                <FaPlusCircle style={{ fontSize: "16px" }} /> So'rov qo'shish
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}>
                <div className="lids__input-wrap">
                  <Input className="lids__input-menu" placeholder="Name" />
                  <Input className="lids__input-menu" placeholder="Phone" />
                  <Input
                    className="lids__input-menu"
                    placeholder="Description"
                  />
                </div>
              </Menu>
              <IconButton className="lids__btn">
                <FaListUl style={{ fontSize: "16px" }} />
              </IconButton>
            </div>
            <div className="lids__box">
              <Dropdown
                menu={{
                  items,
                }}
                placement="top"
                arrow>
                <IconButton className="lids__desc-btn">
                  <FaEllipsisV />
                </IconButton>
              </Dropdown>
              <h4 className="lids__name">Elmurod</h4>/
              <p className="lids__tel">(90) 901-49-59</p>
              <IconButton className="lids__trash-btn">
                <FaTrashAlt />
              </IconButton>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Lids;
