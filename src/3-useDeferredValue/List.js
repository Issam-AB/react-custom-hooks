function App() {
  const [name, setName] = useState("");
  const deferredName = useDeferredValue(name);
  const list = useMemo(() => {
    return largeList.filter((item) => item.name.includes(deferredName));
  }, [deferredName]);

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
      {list.map((item) => (
        <ListComponent key={item.id} item={item} />
      ))}
    </>
  );
}

/**
 * ? useDeferredValue Explained
 * * The useDeferredValue hook allows us to fix this slow render problem by implementing a delay before some information is calculated.
 * * This works in a very similar way to debouncing and throttling since our deferred value will only be calculated after the important state updates have finished running.
 */
