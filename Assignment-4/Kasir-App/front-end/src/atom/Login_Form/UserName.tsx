export default function UserName() {
  return (
    <div>
      <label className="font-bold text-gray-700 block md:text-[13px] lg:text-[15px]">
        User Name
      </label>
      <div>
        <input
          type="text"
          placeholder="please input your user name"
          className="px-2 py-2  rounded-lg border-2 border-gray-700 focus:border-gray-400 lg:w-full md:w-full"
        />
      </div>
    </div>
  );
}
