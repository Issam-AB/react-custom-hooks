function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(largeList);
  const [isPending, startTransition] = useTransition();

  function handleChange(e) {
    setName(e.target.value);
    startTransition(() => {
      setList(largeList.filter((item) => item.name.includes(e.target.value)));
    });
  }

  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
      {isPending ? (
        <div>Loading...</div>
      ) : (
        list.map((item) => <ListComponent key={item.id} item={item} />)
      )}
    </>
  );
}

/**
 * ? useTransition Explained
 * * The useTransition hook allows us to specify some state updates as not as important.
 * * These state updates will be executed in parallel with other state updates, but the rendering of the component will not wait for these less important state updates.
 */
