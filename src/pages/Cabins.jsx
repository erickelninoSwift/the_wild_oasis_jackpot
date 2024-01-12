import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getAllCabins } from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
function Cabins() {
  useEffect(() => {
    getAllCabins().then((data) => {
      console.log(`${data}`);
    });
  }, []);
  const [showForm, setShowForm] = useState(false);
  console.log(showForm);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
      </Row>
      <Row>
        <CabinTable />
        <Button onClick={() => setShowForm(!showForm)}>Add new cabin</Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
