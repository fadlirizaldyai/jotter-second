import { useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import CardButton from "./CardButton";
import { showFormattedDate } from "../utils";

const Card = ({ data, setData }) => {
  const { id, title, body, createdAt } = data;

  const [showOption, setShowOption] = useState(false);
  const navigate = useNavigate();

  const handleDeleteNote = () => {
    setData((prev) => {
      const newData = prev.filter((data) => data.id !== id);

      return newData;
    });
    toast.error("Note removed!", { autoClose: 2000 });
  };

  const handleArchiveNote = () => {
    setData((prev) => {
      const newData = prev.map((item) => {
        if (item.id === id) {
          return { ...item, archived: !item.archived };
        }
        return item;
      });

      return newData;
    });
  };

  return (
    <div className="relative p-3 border group border-slate-300 break-words rounded-md z-50 shadow-md min-h-[200px] gap-5">
      {showOption && (
        <CardButton
          key={id}
          id={id}
          isArchived={data.archived}
          handleDeleteNote={handleDeleteNote}
          handleArchiveNote={handleArchiveNote}
        />
      )}

      <Icon
        icon="bi:three-dots-vertical"
        color="gray"
        width="24"
        className="hidden absolute group-hover:block right-2 cursor-pointer z-[100] p-1 transition-all active:border active:border-slate-300 active:rounded-full"
        onClick={() => setShowOption((prev) => !prev)}
      />

      <h1
        className="cursor-pointer font-semibold text-lg"
        onClick={() => navigate(`/note/${id}`)}
      >
        {title}
      </h1>
      <p className="text-slate-400 font-medium mb-3 text-xs">
        {showFormattedDate(createdAt)}
      </p>
      <p className="text-sm">{body}</p>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
  }).isRequired,
  setData: PropTypes.func.isRequired,
};

export default Card;
