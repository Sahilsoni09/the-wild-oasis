import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}
export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  // creating unique image name
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imapgePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  let query = supabase.from("cabins");
  // create cabin
  if (!id) query = query.insert([{ ...newCabin, image: imapgePath }]);
  // edit cabin
  if (id) query = query.update({ ...newCabin, image: imapgePath }).eq("id", id);
  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }
  if (hasImagePath) return data;
  // upload image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // Delete the cabin if there was an error uploading the image
  if (storageError) {
    console.error(storageError);
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error("Cabin image could not be uploaded");
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}
