import { useNavigate } from "react-router-dom";
import styles from "./ItemTable.module.css";

export const ItemRow = ({ item }) => {
  const navigate = useNavigate();

  return (
    <tr className={styles.tbody_tr}>
      <td className={styles.td}>{item.title}</td>
      <td className={styles.td}>{item.type}</td>
      <td className={styles.td}>{item.description}</td>
      <td className={styles.td}>{item.location || "N/A"}</td>
      <td className={styles.td}>{item.price || "N/A"}</td>
      <td className={styles.td}>{item.service || "N/A"}</td>
      <td className={styles.td}>{item.serviceComment || "N/A"}</td>
      <td className={styles.td}>
        {item.microtasks.length > 0 ? (
          <ul>
            {item.microtasks.map((task, index) => (
              <li key={index}>{`${task.task} - ${task.status}`}</li>
            ))}
          </ul>
        ) : (
          <p>No microtasks available</p>
        )}
      </td>
      <td className={styles.td}>
        <button
          onClick={() => navigate(`/edit/${item.id}`)}
          className={styles.link}
        >
          Edit
        </button>
      </td>
    </tr>
  );
};
