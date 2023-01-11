import TemplatesLogin from "../templates/Login";

export default function Login() {
  return (
    <div className="lg:mt-[100px] lg:w-[400px] md:mt-[200px] md:mx-20 lg:mx-auto bg-gray-300 lg:p-8 border border-gray-400 uppercase rounded-[15px] lg:drop-shadow-xl md:drop-shadow-xl">
      <TemplatesLogin title="Login" />
    </div>
  );
}
