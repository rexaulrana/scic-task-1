import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const AddTask = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newTask = {
      taskTitle: data?.taskTitle,
      description: data?.description,
      deadline: data?.deadline,
      priority: data?.priority,
      status: "Todo",
      user: user?.email,
    };
    // console.log(newTask);
    axiosSecure
      .post("/allTasks", newTask)
      .then((res) => {
        // console.log(res.data);
        if (res?.data?.insertedId) {
          toast.success("Your task added successfully");
        }
        // navigate("all-tasks");
        reset();
      })
      .catch((err) => {
        // console.log(err);
        if (err) {
          toast.error("Something wrong! please try again");
        }
      });
  };
  return (
    <div>
      <div>
        <SectionTitle heading={"Add your"} subheading={"TASK_"}></SectionTitle>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row justify-center items-center gap-2">
            <div className="form-control  w-full">
              <label className="label">
                <span className="label-text text-white">Task Title</span>
              </label>
              <input
                type="text"
                name="taskTitle"
                {...register("taskTitle", { required: true })}
                placeholder="Type here..."
                className="input input-bordered   lg:w-full"
              />
              {errors.taskTitle && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control  w-full">
              <label className="label">
                <span className="label-text text-white">Task Description</span>
              </label>
              <textarea
                type="text"
                name="description"
                {...register("description", { required: true })}
                placeholder="Type here..."
                className="input input-bordered   lg:w-full"
              ></textarea>
              {errors.description && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-2">
            <div className="form-control  w-full">
              <label className="label">
                <span className="label-text text-white">Select deadline</span>
              </label>
              <input
                type="date"
                name="deadline"
                {...register("deadline", { required: true })}
                // placeholder="Type here..."
                className="input input-bordered lg:w-full "
              />
              {errors.deadline && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control  w-full">
              <label className="label">
                <span className="label-text text-white">Select Priority</span>
              </label>

              <select
                required
                name="priority"
                {...register("priority", { required: true })}
                className="select select-bordered w-full select-ghost lg:w-full"
              >
                <option>Low</option>
                <option>Moderate</option>
                <option>High</option>
              </select>

              {errors.priority && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
          </div>
          <button className="btn btn-accent mt-5 mb-10 w-full ">Create</button>
          <Toaster></Toaster>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
