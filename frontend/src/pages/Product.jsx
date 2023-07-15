import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { AddContext } from "../context/AppContext";

let AddDetails = (payload) => {
  console.log("1", payload);
  return axios({
    method: "POST",
    data: payload,
    url: `http://localhost:4500/todo/`,
  });
};

const Product = () => {
  let [data, setData] = useState();
  const { state, setState } = useContext(AddContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [singleData, setSingleData] = useState();
  useEffect(() => {
    setState({ ...state, loading: true });

    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data))
      .finally(() => setState({ ...state, loading: false }));
  }, []);

  const AddToCart = () => {
    setState({ ...state, loading: true });

    AddDetails(singleData)
      .then((res) => {
        // onClose();
        // setRefresh(!refresh);
        // sAd(!ad);
        console.log(res);
      })
      .finally(() => setState({ ...state, loading: false }));
  };
  const getDetail = (data) => {
    setSingleData(data);
    onOpen();
  };

  if (state.loading) {
    return (
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    );
  }
  return (
    <div>
      <Box>
        <SimpleGrid columns={[1, 2, 3, 4]} gap={10}>
          {data?.map((item) => {
            return (
              <Box
                p="20px"
                display="grid"
                gap={10}
                key={item.id}
                boxShadow={
                  "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
                }
              >
                <Text m="10px" fontSize={"24px"}>
                  {item.title}
                </Text>
                <Center>
                  <Image w="90%" h="200px" src={item.image} alt={item.title} />
                </Center>
                <Button
                  onClick={() => {
                    getDetail(item);
                  }}
                  m="10px"
                  variant={"outline"}
                  colorScheme="whatsapp"
                >
                  See Deatails
                </Button>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Product Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box
              p="20px"
              display="grid"
              gap={10}
              boxShadow={
                "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
              }
            >
              <Text m="10px" fontSize={"24px"}>
                {singleData?.title}
              </Text>
              <Center>
                <Image
                  w="60%"
                  h="150px"
                  src={singleData?.image}
                  alt={singleData?.title}
                />
              </Center>
              <Box>
                <Text fontSize={"24px"}>Price: ₹{singleData?.price}</Text>
                <Text fontSize={"24px"}>
                  Description: {singleData?.description}
                </Text>
              </Box>
              <Button
                onClick={AddToCart}
                m="10px"
                variant={"outline"}
                colorScheme="whatsapp"
              >
                Add To Cart
              </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Product;
