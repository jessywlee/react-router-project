import useRouter from "../router/UseRouter";

const About = () => {
  const { push } = useRouter();
  const goToMain = () => {
    push('/');
  }
  return (
    <>
      <h1>about</h1>
      <button onClick={goToMain}>go main</button>
    </>
  );
};

export default About;
