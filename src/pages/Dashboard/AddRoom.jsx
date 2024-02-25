import { useContext, useState } from "react";
import AddRoomForm from "../../components/Dashboard/AddRoomForm";
import { uploadImageToServer } from "../../utils/uploadImage";
import { AuthContext } from "../../providers/AuthProvider";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const AddRoom = () => {
  const { user } = useContext(AuthContext);
  const { addRoomToDB } = useAuth();
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;

    const location = form.location.value;
    const category = form.category.value;
    const title = form.title.value;
    const from = dates.startDate;
    const to = dates.endDate;
    const price = form.price.value;
    const total_guest = form.total_guest.value;
    const bedrooms = form.bedrooms.value;
    const bathrooms = form.bathrooms.value;
    const description = form.description.value;

    const image = form.image.files[0];

    uploadImageToServer(image)
      .then((data) => {
        const newRoom = {
          location,
          category,
          title,
          from,
          to,
          price: parseFloat(price),
          total_guest,
          bedrooms,
          bathrooms,
          description,
          image: data?.data?.display_url,
          owner: {
            name: user?.displayName,
            email: user?.email,
            photo: user?.photoURL,
          },
        };

        addRoomToDB(newRoom);
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });

    form.reset();
  };

  const handleUploadImageText = (img) => {
    setUploadButtonText(img.name);
  };

  const handleSelectDates = (ranges) => {
    setDates(ranges.selection);
  };

  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <AddRoomForm
        onSubmit={handleSubmit}
        onUploadImageText={handleUploadImageText}
        uploadButtonText={uploadButtonText}
        loading={loading}
        dates={dates}
        onSelectDates={handleSelectDates}
      />
    </div>
  );
};

export default AddRoom;
