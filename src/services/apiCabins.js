import supabase from "./supabase";

export const getAllCabins = async () => {
  let { data: cabins, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log(error);
    throw new Error("there was an error while collecting all data");
  }
  console.log(cabins);
  return cabins;
};
