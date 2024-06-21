import React from "react";

const TesPage = () => {
  const handleClick = async () => {
    const url = "https://dummy-project-beryl.vercel.app/api/auth";
    // const url = "http://localhost:3000/api/auth"
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: "TOKENDUMMY", // Replace with your actual token
          "Content-Type": "application/json",
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
    <div>
      <button className="p-3 bg-blue-400" onClick={handleClick}>
        Go to Host 3000
      </button>
    </div>
  );
};

export default TesPage;
