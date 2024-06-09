"use client";

function Page() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const sms = {
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/sms", {
      method: "POST",
      body: JSON.stringify(sms),
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    alert(`Message sent to`);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form action="" className="bg-slate-900 p-10 " onSubmit={onSubmit}>
        <h1 className="text-white text-3xl font-bold">Send an SMS</h1>
        <label htmlFor="" className="text-white block my-4">
          Write your number here:
        </label>
        <input
          name="phone"
          type="tel"
          placeholder="Write your number here"
          className="px-3 py-1 rounded-md block"
          autoComplete="off"
        />
        <label htmlFor="" className="text-white block my-4">
          Write your message here:
        </label>
        <textarea
          name="message"
          id=""
          placeholder="Write your message here"
          className="px-3 py-1 rounded-md w-full"
        ></textarea>
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md block mt-4">
          Send
        </button>
      </form>
    </div>
  );
}

export default Page;
