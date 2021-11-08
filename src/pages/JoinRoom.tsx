import styles from "./JoinRoom.module.scss";

const JoinRoom = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h3 className={styles.form_title}>Join Room</h3>
        <input
          type="text"
          placeholder="Username"
          className={styles.form_input}
        />
        <input 
          type="text"
          placeholder="Room Name"
          className={styles.form_input}
        />
        <button
          className={styles.form_button}
          onClick={() => {}}
        >
          Join
        </button>
      </form>
    </div>
  );
}

export default JoinRoom;