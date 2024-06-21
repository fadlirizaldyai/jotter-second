import { useNavigate, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import Layout from "../components/Layout";
import { getInitialData, showFormattedDate } from "../utils";

const DetailPage = () => {
  const { id } = useParams();
  const data = getInitialData.filter((data) => data.id == id)[0];
  const navigate = useNavigate();

  const handleClick = async () => {
    const url = "https://dummy-project-beryl.vercel.app/api/auth";
    // const url = "http://localhost:3000/api/auth"
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: "TOKENDUMMY", // Replace with your actual token
          "Content-Type": "application/json",
          origin:"https://jotter-second.vercel.app/"
        },
        credentials: "include",
      });
      console.log("RESPOSE", response);

      if (response.redirected) {
        // router.push(response.url);
        window.location.href = response.url; // Redirect to the URL provided by the response
      }
      // const data = await response.json();
      // console.log("Response", response, data);
      // if (data.redirected) {
      // }

      //   if (response.redirected) {
      //     window.location.href = response.url;
      //   }
      // else {
      //     const data = await response.json();
      //     if (data.redirectUrl) {
      //       window.location.href = data.redirectUrl;
      //     }
      //   }
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  return (
    <Layout>
      <div className="px-4 mt-4">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <Icon icon="ion:chevron-back-outline" color="gray" width="18" />
          <p>Back</p>
        </div>

        <section className="mt-6">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-2xl underline">{data?.title}</h1>
            <Icon
              icon="material-symbols:bookmark"
              className={`${
                data?.archived ? "text-yellow-400" : "text-gray-400"
              }`}
              width={24}
            />
          </div>
          <p className="text-slate-400 font-medium mb-3 text-sm mt-1">
            {showFormattedDate(data?.createdAt)}
          </p>
          <p>{data?.body}</p>
        </section>
        <button className="p-3 bg-blue-400" onClick={handleClick}>
          Go to Host 3000
        </button>
      </div>
    </Layout>
  );
};

export default DetailPage;
