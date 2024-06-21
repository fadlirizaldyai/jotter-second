import { useState } from "react";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";

import Layout from "../components/Layout";
import ActiveNoteSection from "../components/section/ActiveNoteSection";
import ArchiveNoteSection from "../components/section/ArchivedNoteSection";
import Tabs from "../components/Tabs";
import Modal from "../components/modal/Modal";

const HomePage = ({ data, setData }) => {
  const tabs = [
    {
      label: "Active",
      content: <ActiveNoteSection data={data} setData={setData} />,
    },
    {
      label: "Archived",
      content: <ArchiveNoteSection data={data} setData={setData} />,
    },
  ];

  const [showModal, setShowModal] = useState(false);

  return (
    <Layout>
      <div className="mt-3 px-5 relative">
        <Tabs tabs={tabs} />
      </div>
      <div
        className="p-2 rounded-full bg-blue-300 w-fit fixed right-10 bottom-10 z-50"
        onClick={() => setShowModal(true)}
      >
        <Icon
          icon="ic:round-add"
          className="text-white text-2xl cursor-pointer transition-all "
        />
      </div>
      {showModal && <Modal setData={setData} setShowModal={setShowModal} />}
    </Layout>
  );
};

HomePage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ).isRequired,
  setData: PropTypes.func.isRequired,
};

export default HomePage;
