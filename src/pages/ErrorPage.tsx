import styles from "ErrorPage.module.scss";

const ErrorPage = ({errorMessage}: {errorMessage?: string}) => {
  return (
    <div>
      Error: {errorMessage ?? "Unknown Error"}
    </div>
  );
}

export default ErrorPage;