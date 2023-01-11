export default function Title(props: any) {
  return (
    <h1 className="lg:text-3xl md:text-2xl font-bold lg:text-center md:text-center my-8">
      {props.content}
    </h1>
  );
}
