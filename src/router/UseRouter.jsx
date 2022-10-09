const useRouter = () => {
  const push = (path) => {
    history.pushState(null, null, path);
    window.dispatchEvent(new Event("popstate"));
  }

  return { push };
}

export default useRouter;