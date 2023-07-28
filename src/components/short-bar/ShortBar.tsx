import Button from "../button/Button";
import bgImg from "../../assets/images/bg-shorten-desktop.svg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { getLink } from "../../redux/slices/linksSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./ShortBar.module.scss";

interface IFormInput {
  link: string;
}

const schema = yup
  .object({
    link: yup.string().url().required(),
  })
  .required();

const ShortBar = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(getLink(data.link)).then((state) => {
      const dataJson = localStorage.getItem("links");

      if (dataJson !== null) {
        const arr = JSON.parse(dataJson);
        arr.push(state.payload);
        localStorage.setItem("links", JSON.stringify(arr));
      } else {
        localStorage.setItem("links", JSON.stringify([state.payload]));
      }
    });
  };

  return (
    <section className={styles.bar}>
      <form className={styles.bar__form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.bar__inputBox}>
          <input
            {...register("link")}
            className={`${styles.bar__input} ${
              errors.link && styles.errorInput
            }`}
            type="text"
            name="link"
            id="link"
            placeholder="Shorten a link here..."
          />
          <Button
            text="Shorten it!"
            callback={() => {}}
            className="btn-short"
          />
        </div>
        {errors.link?.type === "required" ? (
          <p className={styles.error}>The field is required</p>
        ) : errors.link?.type === "url" ? (
          <p className={styles.error}>Link must be a valid URL</p>
        ) : null}
      </form>
      <img className={styles.bar__img} src={bgImg} alt="background" />
    </section>
  );
};

export default ShortBar;
