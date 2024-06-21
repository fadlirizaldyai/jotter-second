import { useNavigate, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import Layout from "../components/Layout";
import { getInitialData, showFormattedDate } from "../utils";

const DetailPage = () => {
  const { id } = useParams();
  const data = getInitialData.filter((data) => data.id == id)[0];
  const navigate = useNavigate();

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
      </div>
    </Layout>
  );
};

export default DetailPage;
