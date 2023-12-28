import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useDrag } from "react-dnd";

const OngoingList = ({ ongoing, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    // console.log("deleted", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/allTasks/${id}`)
          .then((res) => {
            // console.log(res.data);
            if (res?.data?.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your task has been deleted.",
                icon: "success",
              });
              refetch();
            }
          })
          .catch((err) => {
            // console.log(err);
            if (err) {
              Swal.fire({
                title: "Opps!",
                text: "please try again",
                icon: "error",
              });
            }
          });
      }
    });
  };

  // drag
  const [isDragging, drag] = useDrag(() => ({
    type: "ongoing",
    item: { id: ongoing?._id },

    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  // console.log("ongo", isDragging);

  return (
    <div ref={drag}>
      <div
        className={`relative text-center rounded-md shadow-md shadow-black text-black  bg-slate-400 m-2 `}
      >
        <div className="w-48">
          <h1>{ongoing?.taskTitle}</h1>
          <h2>Dead line: {ongoing?.deadline}</h2>
        </div>
        <h3 className="absolute top-3  right-3 text-red-600">
          {" "}
          <button onClick={() => handleDelete(ongoing?._id)}>
            {" "}
            <FaTrashAlt></FaTrashAlt>{" "}
          </button>{" "}
        </h3>
      </div>
    </div>
  );
};

export default OngoingList;
