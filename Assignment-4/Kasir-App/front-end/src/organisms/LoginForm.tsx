import FieldLogin from "../moleculs/FieldLogin";
import FieldPassword from "../moleculs/FieldPassword";
import FieldUserName from "../moleculs/FieldUserName";

export default function LoginForm() {
  return (
    <form method="post" className="max-w-md mx-auto">
      <FieldUserName />
      <FieldPassword />
      <FieldLogin />
    </form>
  );
}
