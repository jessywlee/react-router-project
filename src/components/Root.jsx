import useRouter from "../router/UseRouter";

const Root = () => {
  const { push } = useRouter();
  const goToAbout = () => {
    push('/about');
  }
  return (
    <>
      <h1>root</h1>
      <button onClick={goToAbout}>about</button>
    </>
  );
}

export default Root;
