export default function Password() {
  return (
    <div>
      <label className="font-bold text-gray-700 block md:text-[13px] lg:text-[15px]">
        Password
      </label>
      <div>
        <input
          type="password"
          placeholder="please type your password"
          className="px-2 py-2 rounded-lg border-2 border-gray-700 focus:border-gray-400 lg:w-full md:w-full"
        />
      </div>
    </div>
  );
}
