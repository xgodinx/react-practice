import { lorem } from '../Data/Data';

const mapList = (arr: string[]) => {
  return arr.map((item, index) => {
    return (
      <li key={index}>
        <p>
          <strong>{item.title}</strong> {item.description}
        </p>
      </li>
    );
  });
};

function LoremWay() {
  return (
    <>
      <h3 className="react__title">Learn React</h3>
      <ul>{mapList(lorem)}</ul>
    </>
  );
}

export default LoremWay;
