import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  title: string;
  content: string;  
}

function FormComponent() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };

  return (
    <div className="bg-yellow-50 shadow-md rounded-md w-1/2 p-5 my-5">
      <form className="flex flex-col gap-y-2" onSubmit={handleSubmit(onSubmit)}>
        <input
          className=" p-5 shadow-md rounded-md "
          {...register("title", { required: "*This field is required!" })}
          placeholder="Title"
        />
        {errors.title && <span className="text-red-500">{`${errors.title.message}`}</span>}
        <input
          className=" p-5 shadow-md rounded-md "
          {...register("content", { required: "*This field is required!" })}
          placeholder="Content"
        />
        {errors.content && <span className="text-red-500">{`${errors.content.message}`}</span>}

        <button
          className="bg-slate-600 text-white shadow-md rounded-md p-4 hover:bg-slate-900 hover:text-white"
          disabled={isSubmitting}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormComponent;
