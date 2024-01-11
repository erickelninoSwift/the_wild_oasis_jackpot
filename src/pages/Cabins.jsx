import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getAllCabins } from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";

function Cabins() {
  useEffect(() => {
    getAllCabins().then((data) => {
      console.log(`${data}`);
    });
  }, []);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>TEST</p>
        {/* <img
          src="https://kjoutcsaoqibenvvyyni.supabase.co/storage/v1/object/public/cabins-images/cabin-002.jpg?t=2024-01-08T02%3A44%3A08.629Z"
          alt=""
        /> */}
      </Row>
      <Row>
        <CabinTable />
      </Row>
    </>
  );
}

export default Cabins;
