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

export const deleteCabins = async (id) => {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) throw new Error("There was an error while delete data ");

  return data;
};

export const createCabins = async (newcabins) => {
  const { data, error } = await supabase
    .from("cabins")
    .insert([newcabins])
    .select();
  if (error) {
    console.log(error.message);
    throw new Error(`There was an error while creating new cabins ${error}`);
  }
  return data;
};
