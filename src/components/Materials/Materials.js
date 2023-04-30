export const Materials = ({ items, onDelete, onUpdate }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <a href={item.link}>
            <p>{item.title}</p>
          </a>
          <button type="button" onClick={() => onDelete(item.id)}>
            Delete
          </button>
          <button
            type="button"
            onClick={() => onUpdate({ id: item.id, title: Date.now() })}
          >
            Update
          </button>
        </li>
      ))}
    </ul>
  );
};
