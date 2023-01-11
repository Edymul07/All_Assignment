import Title from "../atom/Login_Form/Title";
import LoginForm from "../organisms/LoginForm";
import LP from "../atom/Images/login-page.png";
import Footer from "../atom/Footer";

export default function Login(props: any) {
  return (
    <section className="lg:max-w-lg md:max-w-lg mx-auto">
      <Title content={props.title} />
      <div className="flex lg:mx-auto md:mx-auto md:justify-center lg:justify-center">
        <img src={LP} />
      </div>
      <LoginForm />
      <Footer />
    </section>
  );
}
