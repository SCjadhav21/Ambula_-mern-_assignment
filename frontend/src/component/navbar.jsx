import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { BsCarFront } from "react-icons/bs";
import { GrMenu, GrUserAdmin } from "react-icons/gr";

import {
  Box,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Center,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box className="nav">
      <Heading
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontWeight="extrabold"
      >
        <span className="white">SJ</span>
        <span className="black">_Cars_Shopy</span>
      </Heading>
      {
        <Box margin="0px 20px 0px auto">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<GrMenu className="icon" />}
              variant="solid"
            />
            <MenuList>
              <Link to="/">
                <MenuItem icon={<GrUserAdmin className="icon" />}>
                  Home
                </MenuItem>
              </Link>
              <Link to="/movies">
                <MenuItem icon={<GrUserAdmin className="icon" />}>
                  Movies
                </MenuItem>
              </Link>
              <Link to="/product">
                <MenuItem icon={<GrUserAdmin className="icon" />}>
                  Glossary
                </MenuItem>
              </Link>
              <Link to="/todo">
                <MenuItem icon={<GrUserAdmin className="icon" />}>
                  Todo
                </MenuItem>
              </Link>
              <Link to="/cart">
                <MenuItem icon={<GrUserAdmin className="icon" />}>
                  Cart
                </MenuItem>
              </Link>
              <Link to="/about">
                <MenuItem icon={<BsCarFront className="icon" />}>
                  About
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
      }
      {
        <Box className="right-end">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<FaRegUserCircle className="icon" />}
              variant="solid"
            />

            <MenuList background="black" color="white">
              {/* <MenuItem > */}
              <Center background="black" color="white">
                Welcome
              </Center>

              <MenuItem
                background="black"
                color="white"
                icon={<FaRegUserCircle className="icon" />}
              >
                sj
              </MenuItem>
              <MenuItem
                background="black"
                color="white"
                icon={<FiLogOut className="icon" />}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      }
    </Box>
  );
};

export default Navbar;
