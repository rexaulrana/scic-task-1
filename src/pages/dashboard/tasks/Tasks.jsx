import { useContext, useEffect, useState } from "react";
import TodoList from "./TodoList";
import OngoingList from "./OngoingList";
import CompletedList from "./CompletedList";
import SectionTitle from "../../../components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useDrop } from "react-dnd";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";

const Tasks = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  // const [tasks, setTasks] = useState([]);
  const [todo, setTodo] = useState([]);
  const [onGoing, setOnGoing] = useState([]);
  const [completed, setCompleted] = useState([]);

  // get all tasks
  const { refetch, data: tasks } = useQuery({
    queryKey: ["allTasks"],
    queryFn: async () => {
      const result = await axiosSecure.get(`/allTasks?email=${user?.email}`);
      // console.log("object", result.data);
      return result?.data;
    },
  });

  //
  // get task by status(todo,ongoing,completed)
  useEffect(() => {
    const todoFilter = tasks?.filter((task) => task?.status === "Todo");
    const onGoingFilter = tasks?.filter((task) => task?.status === "Ongoing");
    const completedFilter = tasks?.filter(
      (task) => task?.status === "Completed"
    );
    setTodo(todoFilter);
    setOnGoing(onGoingFilter);
    setCompleted(completedFilter);
  }, [tasks]);
  // console.log("todo", todo);
  // console.log("onGoing", onGoing);
  // console.log("completed", completed);

  // // drag
  // const [{ isDragging }, drag] = useDrag(() => ({
  //   type: "ongoing",
  //   item: { id: ongoing?._id },
  //   collect: (monitor) => ({
  //     isDragging: !!monitor.isDragging(),
  //   }),
  // }));
  // console.log("on", isDragging);

  // drop to ongoing task
  const [isOver, drop] = useDrop(() => ({
    accept: "todo",
    drop: (item) => addItemOnGoing(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  // console.log("on", isOver);
  const addItemOnGoing = (id) => {
    // console.log("ondrop", id);
    if (id) {
      axiosSecure
        .patch(`/allTasks/${id}`)
        .then((res) => {
          // console.log(res.data);
          if (res?.data?.modifiedCount > 0) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Your task status has been changed",
              showConfirmButton: false,
              timer: 1500,
            });

            refetch();
          }
        })
        .catch((err) => {
          // console.log(err);
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: "please try again",
            showConfirmButton: false,
            timer: 1500,
          });
          return;
        });
    }
  };
  // drop to completed task
  const [isOverr, dropp] = useDrop(() => ({
    accept: "ongoing",
    drop: (item) => addItemCompleted(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  // console.log("com", isOverr);
  const addItemCompleted = (id) => {
    // console.log("comdrop", id);
    if (id) {
      axiosSecure
        .patch(`/allTasksCom/${id}`)
        .then((res) => {
          // console.log(res.data);
          if (res?.data?.modifiedCount > 0) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Your task status has been changed",
              showConfirmButton: false,
              timer: 1500,
            });

            refetch();
          }
        })
        .catch((err) => {
          // console.log(err);
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: "please try again",
            showConfirmButton: false,
            timer: 1500,
          });
          return;
        });
    }
  };
  return (
    <div>
      <SectionTitle heading={"All"} subheading={"Task_"}></SectionTitle>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-1  mt-2">
        <div className=" w-full">
          <h1 className="text-center text-white text-lg font-medium">
            Todo Task ({todo?.length})
          </h1>
          <div className="bg-white overflow-y-auto h-52 ">
            {todo?.length > 0 ? (
              <div>
                {todo?.map((t) => (
                  <TodoList refetch={refetch} key={t._id} todo={t}></TodoList>
                ))}
              </div>
            ) : (
              <div className="text-center font-bold text-red-700 py-20">
                You have no task.
              </div>
            )}
          </div>
        </div>
        <div className=" w-full">
          {" "}
          <div className=" ">
            <h1 className="text-center text-white text-lg font-medium">
              Ongoing Task ({onGoing?.length})
            </h1>
            <div ref={drop} className="bg-blue-500 overflow-y-auto h-52 ">
              {onGoing?.length > 0 ? (
                <div>
                  {onGoing?.map((o) => (
                    <OngoingList
                      refetch={refetch}
                      key={o._id}
                      ongoing={o}
                    ></OngoingList>
                  ))}
                </div>
              ) : (
                <div className="text-center font-bold text-red-700 py-20">
                  You have no on-Going task.
                </div>
              )}
            </div>
          </div>
        </div>
        <div className=" w-full">
          {" "}
          <div className=" w-full">
            <h1 className="text-center  text-white text-lg font-medium">
              Completed Task ({completed?.length})
            </h1>
            <div ref={dropp} className="bg-green-500 overflow-y-auto h-52 ">
              {completed?.length > 0 ? (
                <div>
                  {completed?.map((c) => (
                    <CompletedList
                      refetch={refetch}
                      key={c._id}
                      completed={c}
                    ></CompletedList>
                  ))}
                </div>
              ) : (
                <div className="text-center font-bold text-red-700 py-20">
                  You have no completed task.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
