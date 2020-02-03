[@react.component]
let make = () => {
  let (count1, setCount1) = React.useState(() => 0);

  let onClick1 = React.useCallback1(_x => {
    setCount1(old_state => old_state + 1)
  }, [|setCount1|]);

  let onClick2 = React.useCallback1(_x => {
    setCount1(old_state => old_state - 1)
  }, [|setCount1|]);

  <div>
    <button onClick=onClick1 />
    <div>{React.string(string_of_int(count1))}</div>
    <button onClick=onClick2/>
  </div>;
};
