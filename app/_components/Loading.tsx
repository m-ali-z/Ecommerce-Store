import { ReloadIcon } from "@radix-ui/react-icons";
const Loading = () => {
  return (
    <div className="h-[15rem] w-[15rem]  flex justify-center items-center">
      <ReloadIcon className="animate-spin" />
    </div>
  );
};

export default Loading;
