import Button from "../button/Button";
import bgImg from "../../assets/images/bg-shorten-desktop.svg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { getLink } from "../../redux/slices/linksSlice";
import styles from "./ShortBar.module.scss";

interface IFormInput {
  link: string;
}

const ShortBar = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) =>
    dispatch(
      getLink(
        "https://github.com/ArtemDerenok/match-match-game/blob/master/src/redux/slices/usersSlice.ts"
      )
    );

  return (
    <section className={styles.bar}>
      <form className={styles.bar__form} onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("link")}
          className={styles.bar__input}
          type="text"
          name="link"
          id="link"
          placeholder="Shorten a link here..."
        />
        <Button text="Shorten it!" callback={() => {}} className="btn-short" />
      </form>
      <img className={styles.bar__img} src={bgImg} alt="background" />
    </section>
  );
};

export default ShortBar;
