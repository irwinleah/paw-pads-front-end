const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/bookings`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    if (data.error) {
      throw new Error(data.error);
    }
    return data;
  } catch (error) {
    console.log(error, "<--this is the error");
    throw new Error(error);
  }
};

const show = async (bookingId) => {
  try {
    const res = await fetch(`${BASE_URL}/${bookingId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const addBooking = async (formData, rentalId) => {
  try {
    const res = await fetch(`${BASE_URL}/${rentalId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const updateBooking = async (bookingId, bookingFormData) => {
  try {
    const res = await fetch(`${BASE_URL}/${bookingId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingFormData),
    });

    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const deleteBooking = async (bookingId) => {
  try {
    const res = await fetch(`${BASE_URL}/${bookingId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export { index, show, addBooking, updateBooking, deleteBooking };
