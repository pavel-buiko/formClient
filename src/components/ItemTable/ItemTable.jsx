import { ItemRow } from "./ItemRow";
import styles from "./ItemTable.module.css";

export const ItemTable = ({ items = [] }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.th}>Title</th>
          <th className={styles.th}>Type</th>
          <th className={styles.th}>Description</th>
          <th className={styles.th}>Location</th>
          <th className={styles.th}>Price</th>
          <th className={styles.th}>Service</th>
          <th className={styles.th}>Service Comment</th>
          <th className={styles.th}>Microtasks</th>
          <th className={styles.th}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.length > 0 ? (
          items.map((item) => <ItemRow key={item.id} item={item} />)
        ) : (
          <tr>
            <td colSpan="10" className={styles.noItems}>
              No items available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
